import { Block } from "../../utils/Block";
import template from "./error.hbs";

interface IErrorPageProps {
  error: number;
  text: string;
}

export class ErrorPage extends Block<IErrorPageProps> {
  constructor(props: IErrorPageProps) {
    super(props);
  }

  render() {
    return this.compile(template, {
      text: this.props.text,
      error: this.props.error,
    });
  }
}
