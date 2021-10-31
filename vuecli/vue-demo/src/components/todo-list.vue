<template>
  <ul>
    <slot></slot>
  </ul>
</template>

<script>
export default {
  components: {},
  props: {
    list: () => {
      return {
        type: Array,
        default: [],
      };
    },
  },
  data() {
    return {
      value: "value",
    };
  },
};
</script>

<style></style>
