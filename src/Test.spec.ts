import { mount } from "@vue/test-utils";
import Test from "./Test.vue";

test("uses mounts", async () => {
  const wrapper = mount(Test);
  expect(wrapper.html()).toMatchInlineSnapshot(
    `"<div><button class=\\"hello\\" title=\\"this is a button\\">click</button></div>"`
  );
});

test("lifecycle methods in child component", () => {
  const Parent = {
    template: `
      <div>
        <p>I am a parent</p>
        <slot />
      </div>
    `,
  };
  const Child = {
    created() {
      throw new Error("error?");
      console.log("child created");
    },
    mounted() {
      console.log("child mounted");
    },
    render() {
      return "i am a child";
    },
  };

  const wrapper = mount(Parent, {
    slots: { default: Child },
  });
  console.log(wrapper.html());
});
