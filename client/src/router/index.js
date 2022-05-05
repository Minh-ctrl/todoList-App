import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditView from "../views/EditView.vue";
import PostView from "../views/PostView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/edit", name: "Edit", component: EditView },
  { path: "/post", name: "Post", component: PostView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
