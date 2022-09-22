import { Block } from "../../utils/Block";
import template from "./avatar.hbs";
import styles from "./styles.module.scss";

interface IAvatarProps {
  path: string;
  width: number;
  height: number;
}

export class Avatar extends Block<IAvatarProps> {
  constructor(props: IAvatarProps) {
    super(props);
  }

  render() {
    return this.compile(template, { ...this.props, styles });
  }
}
