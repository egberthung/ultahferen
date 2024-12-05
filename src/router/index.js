import { createRouter, createWebHistory } from "vue-router";
import QuizApp from "../components/QuizApp.vue";
import QuizResult from "../components/QuizResult.vue";
import ClaimReward from "../components/ClaimReward.vue";

const routes = [
  { path: "/", name: "QuizApp", component: QuizApp },
  { path: "/result", name: "QuizResult", component: QuizResult },
  { path: "/claim", name: "ClaimReward", component: ClaimReward },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
