import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Movie from "../views/Movie.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Movie/:id",
    name: "Movie",
    // component: Movie,
    components: { default: Movie },

    props: true
    // props(route) {
    //   return {
    //     index: route.params.movie.id,
    //   };
    // },
  },
];


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
