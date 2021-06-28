<template>
  <div>
    <button :class="className" :title="title">click</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      className: "hello",
      title: "this is a button",
    };
  },
};
</script>
