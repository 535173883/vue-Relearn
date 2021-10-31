<template>
  <div id="app">
    {{ $store.state.user.name }}
    {{ $store.state.user.num }}
    <button @click="addStoreUserNum">增加</button>
    <button @click="addNumByAction">异步增加</button>
    <input v-model="message" />
    <input :value="message" @input="handleChange" />
    <p :title.sync="message">p标签</p>
    <span>{{ message }}</span>
    <todoList ref="todoList">
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
      message: "hello",
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
    };
  },
  methods: {
    addNumByAction() {
      this.$store.dispatch("user/addAction", 2);
    },
    addStoreUserNum() {
      this.$store.commit("user/addNum", 1);
    },
    handleDelete(val) {
      console.log("handleDelete", val);
    },
    handleChange(e) {
      console.log(e);
      this.message = e.target.value;
    },
  },
  mounted() {
    console.log(this.$refs.todoList);
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
