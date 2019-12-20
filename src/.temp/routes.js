export default [
  {
    path: "/events",
    component: () => import(/* webpackChunkName: "page--src-pages-events-vue" */ "D:\\RutenBasketballClub\\src\\pages\\Events.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\RutenBasketballClub\\src\\pages\\Index.vue")
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\RutenBasketballClub\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\RutenBasketballClub\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

