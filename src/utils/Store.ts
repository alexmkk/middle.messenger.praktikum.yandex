import { set } from "../helpers/set";
import { EventBus } from "./EventBus";
import { Block } from "./Block";
import { isEqualObject } from "./IsEqualObject";

enum StoreEvents {
  UPDATED = "updated",
}

interface IState {
  user: object;
  chats: object[];
  notice?: {
    text: string;
    error: string;
    success: string;
  };
}

export class Store extends EventBus {
  private state: IState = {} as IState;

  public set(keypath: string, data: unknown) {
    set(this.state, keypath, data);

    this.emit(StoreEvents.UPDATED, this.getState());
  }

  public getState() {
    return this.state;
  }
}

const store = new Store();

export function withStore(mapStateToProps: (state: any) => any) {
  return function wrap(Component: typeof Block) {
    let prevState: any;

    return class WithStore extends Component {
      constructor(props: any) {
        prevState = mapStateToProps(store.getState());

        super({ ...props, ...prevState });

        store.on(StoreEvents.UPDATED, () => {
          const stateProps = mapStateToProps(store.getState());

          if (isEqualObject(prevState, stateProps)) {
            return;
          }

          prevState = stateProps;

          this.setProps({ ...stateProps });
        });
      }
    };
  };
}

export default store;
