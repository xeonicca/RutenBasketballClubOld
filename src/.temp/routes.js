export default [
  {
    name: "home",
    path: "/",
    component: () => import(/* webpackChunkName: "page--src-pages-index-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\Index.vue")
  },
  {
    path: "/about",
    component: () => import(/* webpackChunkName: "page--src-pages-about-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\About.vue")
  },
  {
    path: "/teams",
    component: () => import(/* webpackChunkName: "page--src-pages-teams-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\Teams.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "404",
    path: "/404",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\node_modules\\gridsome\\app\\pages\\404.vue")
  },
  {
    path: "/games",
    component: () => import(/* webpackChunkName: "page--src-pages-games-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\Games.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/players",
    component: () => import(/* webpackChunkName: "page--src-pages-players-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\pages\\Players.vue"),
    meta: {
      data: true
    }
  },
  {
    path: "/teams/:id",
    component: () => import(/* webpackChunkName: "page--src-templates-teams-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\src\\templates\\Teams.vue"),
    meta: {
      data: true
    }
  },
  {
    name: "*",
    path: "*",
    component: () => import(/* webpackChunkName: "page--node-modules-gridsome-app-pages-404-vue" */ "C:\\Users\\Steven\\Workspace\\RutenBasketballClub\\node_modules\\gridsome\\app\\pages\\404.vue")
  }
]

