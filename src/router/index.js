import { createRouter, createWebHistory } from "vue-router";
import ListsView from "@/views/ListsView.vue";
import ListDetails from "@/views/ListDetails.vue";
import HomePage from "@/views/HomePage.vue";
import AddNewList from "@/views/AddNewList.vue";
import LoginBtn from "@/views/Login.vue";
// import RegisterBtn from "@/views/Login.vue";
// import RegisterBtn from "@/components/UI/RegisterBtn.vue";
import RegisterBtn from "@/views/Login.vue";
import LoginFormBtn from "@/views/Login.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/add-new",
      component: AddNewList,
    },
    {
      path: "/lists",
      name: "ListsView",
      component: ListsView,
    },
    {
      path: "/lists/:id",
      name: "ListDetails",
      component: ListDetails,
      props: true,
    },
    {
      path: "/:pathMatch(.*)*",
      redirect: "/lists",
    },
    {
      path:"/login",
      component: LoginBtn

    },{
      path: "/register",
      component: RegisterBtn,
    },
    {
      path: "/homepageadmin.vue",
      component: LoginFormBtn,
      //  path: "/homepageadmin.vue/:id",

    },
  ],
});

export default router;
