import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import EditView from "../views/EditView.vue";
import SignUp from "../views/SignUp.vue";
import routineEditView from "../views/routineEditView.vue";

const routes = [
  { path: "/", name: "Home", component: HomeView },
  { path: "/edit", name: "Edit", component: EditView },
  { path: "/signup", name: "SignUp", component: SignUp },
  { path: "/routineEdit", name: "Routine Edit", component: routineEditView },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});
export default router;
