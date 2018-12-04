import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import ResumeShow from "./views/ResumeShow.vue";

Vue.use(Router);

export default new Router({
  routes: [
    { path: "/", name: "home", component: Home },
    { path: "/resume", name: "resume-show", component: ResumeShow }
  ]
});
