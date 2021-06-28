import { mount } from "@vue/test-utils";
import Test from "./Test.vue";

test("uses mounts", async () => {
  const wrapper = mount(Test);
  expect(wrapper.html()).toMatchInlineSnapshot(
    `"<div><button class=\\"hello\\" title=\\"this is a button\\">click</button></div>"`
  );
});
