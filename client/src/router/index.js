import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditView from "../views/EditView.vue";
import PostView from "../views/PostView.vue";
import routineEditView from "../views/routineEditView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/edit", name: "Edit", component: EditView },
  { path: "/post", name: "Post", component: PostView },
  { path: "/routineEdit", name: "Routine Edit", component: routineEditView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
