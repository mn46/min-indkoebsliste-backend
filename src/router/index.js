import { createRouter, createWebHistory } from "vue-router";
import ListsView from "@/views/ListsView.vue";
import ListDetails from "@/views/ListDetails.vue";
import HomePage from "@/views/HomePage.vue";
import AddNewList from "@/views/AddNewList.vue";
import HomePageAdmin from "@/views/HomePageAdmin.vue";

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
      path: "/admin",
      name: "HomePageAdmin",
      component: HomePageAdmin,
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
  ],
});

export default router;
