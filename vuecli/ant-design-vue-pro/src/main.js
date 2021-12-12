import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueI18n from "vue-i18n";
import enUS from "./locale/enUS";
import zhCN from "./locale/zhCN";
import queryString from "query-string";
import VueHighlightJS from "vue-highlightjs";
import "highlight.js/styles/github.css";
import {
  Button,
  Layout,
  Icon,
  Drawer,
  Radio,
  Menu,
  Form,
  Input,
  Select,
  LocaleProvider,
  Dropdown,
  DatePicker,
} from "ant-design-vue";
import "ant-design-vue/lib/button/style";
import Authorized from "./components/Authorized";
import Auth from "./directives/auth";

Vue.config.productionTip = false;
Vue.use(Button);
Vue.use(Layout);
Vue.use(Icon);
Vue.use(Drawer);
Vue.use(Radio);
Vue.use(Menu);
Vue.use(Form);
Vue.use(Input);
Vue.use(Select);
Vue.use(LocaleProvider);
Vue.use(Dropdown);
Vue.use(DatePicker);
Vue.component("Authorized", Authorized);
Vue.use(Auth);
Vue.use(VueI18n);
// Tell Vue.js to use vue-highlightjs
Vue.use(VueHighlightJS);
const i18n = new VueI18n({
  locale: queryString.parse(location.search).locale || "zhCN",
  messages: {
    zhCN: { message: zhCN },
    enUS: { message: enUS },
  },
});
new Vue({
  i18n,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
