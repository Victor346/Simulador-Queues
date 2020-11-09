import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import MM1 from "@/views/MM1.vue";
import MMS from "@/views/MMS.vue";
import MMSK from "@/views/MMSK.vue";
import MG1 from "@/views/MG1.vue";
import MEkS from "@/views/MEkS.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/mm1",
    name: "MM1",
    component: MM1
  },
  {
    path: "/mms",
    name: "MMS",
    component: MMS
  },
  {
    path: "/mmsk",
    name: "MMSK",
    component: MMSK
  },
  {
    path: "/mg1",
    name: "MG1",
    component: MG1
  },
  {
    path: "/meks",
    name: "MEkS",
    component: MEkS
  }
];

const router = new VueRouter({
  routes
});

export default router;
