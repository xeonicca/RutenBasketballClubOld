export default [
  {
    path: "/games",
    component: () => import(/* webpackChunkName: "page--src-pages-games-vue" */ "D:\\RutenBasketballClub\\src\\pages\\Games.vue"),
    meta: {
      data: [1,"0f16cafe"]
    }
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "D:\\RutenBasketballClub\\src\\pages\\About.vue")
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "D:\\RutenBasketballClub\\src\\pages\\Index.vue")
  },
  {
    path: "/teams",
    component: () => import(/* webpackChunkName: "page--src-pages-teams-vue" */ "D:\\RutenBasketballClub\\src\\pages\\Teams.vue"),
    meta: {
      data: [1,"85cb2e98"]
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\RutenBasketballClub\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    path: "/teams/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-teams-vue" */ "D:\\RutenBasketballClub\\src\\templates\\Teams.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src-templates-teams-vue" */ "D:\\RutenBasketballClub\\.cache\\data\\route-meta\\0.json")
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "D:\\RutenBasketballClub\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

