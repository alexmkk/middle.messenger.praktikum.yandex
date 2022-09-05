import {Block} from "../../src/utils/Block";
import template from "./profileEdit.hbs";
import {getFormData} from "../../src/helpers/getFormData";

interface IProfileEditPageProps {
    title: string;
}

export class ProfileEditPage extends Block {
    constructor(props: IProfileEditPageProps) {
        super("div", props);
    }

    handleSubmit(e) {
        e.preventDefault();
        getFormData();
    };

    render() {
        return this.compile(template, {
            title: this.props.title,
            children: this.children,
            onClick: this.handleSubmit,
        })
    }
}