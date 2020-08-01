import { shallowMount } from "@vue/test-utils";
import Component from "../TestComponent";

describe("Компонент TestComponent", () => {
  const wrapper = shallowMount(Component);
  const vm = wrapper.vm;

  it("Разметка корректна", () => {
    expect(wrapper.html()).toContain('<div class="test">');
  });

  it("Имеет кнопку", () => {
    expect(wrapper.find("button")).toEqual({
      selector: "button"
    });
  });

  it("Событие клика было вызвано при нажатии", () => {
    vm.$emit("click", 123);
    expect(wrapper.emitted().click).toBeTruthy();
    expect(wrapper.emitted().click.length).toBe(1);
    expect(wrapper.emitted().click[0]).toEqual([123]);
  });

  it("Нажатие кнопки увеличивает счетчик", () => {
    expect(vm.counter).toBe(0);
    const button = wrapper.find("button");
    button.trigger("click");
    expect(vm.counter).toBe(1);
  });
});
