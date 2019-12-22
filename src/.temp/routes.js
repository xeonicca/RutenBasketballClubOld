export default [
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\About.vue")
  },
  {
    path: "/games",
    component: () => import(/* webpackChunkName: "page--src-pages-games-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\Games.vue"),
    meta: {
      data: [1,"0f16cafe"]
    }
  },
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\Index.vue")
  },
  {
    path: "/teams",
    component: () => import(/* webpackChunkName: "page--src-pages-teams-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\Teams.vue"),
    meta: {
      data: [1,"594692c6"]
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    path: "/teams/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-teams-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\templates\\Teams.vue"),
    meta: {
      data: () => import(/* webpackChunkName: "page--src-templates-teams-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\.cache\\data\\route-meta\\0.json")
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

