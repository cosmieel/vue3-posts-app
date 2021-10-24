import Main from "@/pages/Main";
import About from "@/pages/About";
import Posts from "@/pages/Posts";
import PostId from "@/pages/PostId";
import PostsWithStore from "@/pages/PostsWithStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts",
    component: Posts,
  },
  {
    path: "/posts/:id",
    component: PostId,
  },
  {
    path: "/store",
    component: PostsWithStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(process.env.BASE_URL),
});

export default router;
