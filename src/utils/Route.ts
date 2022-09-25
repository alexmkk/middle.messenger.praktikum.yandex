import { isEqual } from "./IsEqual";
import { Block } from "./Block";

function render(query: string, block: Block) {
  const root = document.querySelector(query);

  if (root === null) {
    throw new Error(`root по селектору ${query} не найден`);
  }

  root.innerHTML = "";

  root.append(block.getContent()!);

  return root;
}

export class Route {
  private block: Block | null = null;

  constructor(
    private pathname: string,
    private readonly blockClass: typeof Block,
    private readonly query: string
  ) {}

  navigate(pathname: string) {
    if (this.match(pathname)) {
      this.pathname = pathname;
      this.render();
    }
  }

  leave() {
    this.block = null;
  }

  match(pathname: string) {
    return isEqual(pathname, this.pathname);
  }

  render() {
    if (!this.block) {
      this.block = new this.blockClass({});
      render(this.query, this.block);
      return;
    }

    this.block.show();
  }
}