<template>
  <li>
    <slot name="pre-icon" :value="value"></slot>
    <span v-if="del">{{ title }}</span>
    <span v-else style="text-decoration: line-through">{{ title }}</span>
    <slot name="def-icon">default</slot>
    <button v-show="!del" @click="handleClick">删除</button>
  </li>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "",
    },
    del: {
      type: Boolean,
      default: false,
    },
  },
  data: function () {
    return {
      value: Math.random(),
    };
  },
  methods: {
    handleClick() {
      console.log("点击了删除按钮");
      this.$emit("delete", this.title);
    },
  },
};
</script>

<style></style>
