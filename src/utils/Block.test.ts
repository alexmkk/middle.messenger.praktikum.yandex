import proxyquire from "proxyquire";
import { expect } from "chai";
import sinon from "sinon";

const eventBusMock = {
  on: sinon.fake(),
  emit: sinon.fake(),
};

const { default: Block } = proxyquire("./Block", {
  "./EventBus": {
    EventBus: class {
      on = eventBusMock.on;
      emit = eventBusMock.emit;
    },
  },
}) as any;

describe("Block", () => {
  class ComponentMock extends Block {}

  it("should fire init event on initialization", () => {
    new ComponentMock();

    expect(eventBusMock.emit.calledWith("init")).to.eq(true);
  });
});
