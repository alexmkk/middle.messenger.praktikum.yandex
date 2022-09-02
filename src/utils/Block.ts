import { EventBus } from "./EventBus";
import { v4 as uuidv4 } from 'uuid';

export class Block {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    public id: string = uuidv4();
    protected props: Record<string, unknown>;
    protected children: Record<string, Block>;
    private _element: HTMLElement | null = null;
    private _meta: { tagName: string, props: any; };
    private  eventBus: () => EventBus;

    /** JSDoc
     * @param {string} tagName
     * @param {Object} props
     *
     * @returns {void}
     */
    constructor(tagName = "div", propsWithChildren = {}) {
        const eventBus = new EventBus();

        const { props, children } = this._getChildrenAndProps(propsWithChildren);


        this._meta = {
            tagName,
            props,
        };

        this.props = this._makePropsProxy(props);
        this.children = children;

        this.eventBus = () => eventBus;

        this._registerEvents(eventBus);
        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        // const { tagName } = this._meta;
        // this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();
    }

    componentDidMount() { }

    public dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    private _componentDidUpdate(oldProps, newProps) {
        if (this.componentDidUpdate(oldProps, newProps)) {
            this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
        }
    }

    protected componentDidUpdate(oldProps: object, newProps: object) {
        return true;
    }

    setProps = (nextProps: unknown) => {
        if (!nextProps) {
            return;
        }

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    _getChildrenAndProps(childrenAndProps: object) {
        const props: Record<string, unknown> = {};
        const children: Record<string, Block> = {};

        Object.entries(childrenAndProps).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return {
            props,
            children,
        }
    }

    _addEvents() {
        const { events = {} } = this.props as { events: Record<string, () => void> };

        if (!events) {
            return;
        }
        console.log("events", events, this.element);
        Object.entries(events).forEach(([event, listener]) => {
            this._element!.addEventListener(event, listener);
        });
    }

    private _render() {
        const fragment = this.render();
        const newElement = fragment.firstElementChild as HTMLElement;
        // const template = this.render();
        console.log("RENDER", this.props)
        // const fragment = this.compile(template, { ...this.props, children: this.children });

        // this._element = fragment.firstElementChild as HTMLElement;
        this._element?.replaceWith(newElement);
        this._element = newElement;

        this._addEvents();
    }

    protected render(): DocumentFragment {
        return new DocumentFragment();
    }

    getContent() {
        return this.element;
    }

    protected compile(template: (context: any) => string, context: any) {
        const contextAndStubs = { ...context };

        // Object.entries(this.children).forEach(([name, component]) => {
        //     contextAndStubs[name] = `<div data-id="${component.id}" />`;
        // });

        // const compiled = Handlebars.compile(template);
        // const temp = document.createElement("template");
        //
        // temp.innerHTML = compiled(contextAndStubs);
        const html = template(contextAndStubs);
        const temp = document.createElement("template");

        temp.innerHTML = html;

       Object.entries(this.children).forEach(([_, component]) => {
           const stub = temp.content.querySelector(`[data-id="${component.id}"]`);

           if (!stub) return;

           stub.replaceWith(component.getContent()!);
       });

       return temp.content;
    }

    _makePropsProxy(props) {
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];

                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                const oldTarget = { ...target };

                target[prop] = value;

                self.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _createDocumentElement(tagName) {
        return document.createElement(tagName);
    }

    show() {
        this.getContent()!.style.display = "block";
    }

    hide() {
        this.getContent()!.style.display = "none";
    }
}