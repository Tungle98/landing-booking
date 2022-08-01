import Vue from "vue";
import Router from "vue-router";
import AppHeader from "./layout/AppHeader";
import AppFooter from "./layout/AppFooter";
import Components from "./views/Components.vue";
import Landing from "./views/Landing.vue";
import Login from "./views/Login.vue";
import Register from "./views/Register.vue";
import Profile from "./views/Profile.vue";
import Hotdeal from "./views/HotDeal.vue";
import TopCourse from "./views/TopCourse.vue";
import TeeTimeList from "./views/ListTeeTime.vue";
import GoodYardArea from "./views/GoodYardArea.vue";
import StayPlay from "./views/StayPlay.vue";

Vue.use(Router);

export default new Router({
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/",
      name: "components",
      components: {
        header: AppHeader,
        default: Components,
        footer: AppFooter
      }
    },
    {
      path: "/landing",
      name: "landing",
      components: {
        header: AppHeader,
        default: Landing,
        footer: AppFooter
      }
    },
    {
      path: "/login",
      name: "login",
      components: {
        header: AppHeader,
        default: Login,
        footer: AppFooter
      }
    },
    {
      path: "/register",
      name: "register",
      components: {
        header: AppHeader,
        default: Register,
        footer: AppFooter
      }
    },
    {
      path: "/profile",
      name: "profile",
      components: {
        header: AppHeader,
        default: Profile,
        footer: AppFooter
      }
    },
    {
      path: "/hotdeal",
      name: "hotdeal",
      components: {
        header: AppHeader,
        default: Hotdeal,
        footer: AppFooter
      }
    },
    {
      path: "/top-ten-course",
      name: "TopCourse",
      components: {
        header: AppHeader,
        default: TopCourse,
        footer: AppFooter
      }
    },
    {
      path: "/list-tee-time",
      name: "TeeTime",
      components: {
        header: AppHeader,
        default: TeeTimeList,
        footer: AppFooter
      }
    },
    {
      path: "/good-yard-area",
      name: "GoodYardArea",
      components: {
        header: AppHeader,
        default: GoodYardArea,
        footer: AppFooter
      }
    },
    {
      path: "/stayplay",
      name: "StayPlay",
      components: {
        header: AppHeader,
        default: StayPlay,
        footer: AppFooter
      }
    }
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
