<template>
  <div id="app">
    <todoList>
      <todoItem
        v-for="(item, index) in list"
        :title="item.title"
        :del="item.del"
        :key="index"
      >
        <template v-slot:pre-icon="{ value }"
          ><span>前置图标{{ value }}</span></template
        >
      </todoItem>
    </todoList>
  </div>
</template>

<script>
import todoList from "./components/todo-list.vue";
import todoItem from "./components/todo-item.vue";

export default {
  name: "App",
  components: {
    todoItem,
    todoList,
  },
  data() {
    return {
      list: [
        {
          title: "课程1",
          del: false,
        },
        {
          title: "课程2",
          del: false,
        },
      ],
      methods: {
        handleDelete(val) {
          console.log("handleDelete", val);
        },
      },
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
