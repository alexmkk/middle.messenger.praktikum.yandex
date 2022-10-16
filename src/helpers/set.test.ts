import { expect } from "chai";
import { set } from "./set";

describe("set function", () => {
  const path = "test path";
  const value = "some value";
  let obj: Record<string, unknown>;

  beforeEach(() => {
    obj = {};
  });

  it("should set a value by path to the object", () => {
    set(obj, path, value);

    expect(obj).to.haveOwnProperty(path, value);
  });

  it("should return original object", () => {
    const result = set(obj, path, value);

    obj["test2"] = "another value";

    expect(result).to.equal(obj);
  });

  it("should return original object if it's is not an object", () => {
    const notAnObject = "string";

    const result = set(notAnObject, path, value);

    expect(result).to.eq(notAnObject);
  });

  it("should throw an error if path is not a string", () => {
    const pathNotAString = 10;

    // @ts-ignore because we want to check behaviour in runtime
    const f = () => set(obj, pathNotAString, value);

    expect(f).to.throw(Error);
  });
});
