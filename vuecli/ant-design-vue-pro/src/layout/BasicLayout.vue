<template>
  <div>
    <Header></Header>
    <SiderMenu></SiderMenu>
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "./Header.vue";
import Footer from "./Footer.vue";
import SiderMenu from "./SiderMenu.vue";
export default {
  components: {
    Header,
    Footer,
    SiderMenu,
  },
};
</script>

<style></style>
