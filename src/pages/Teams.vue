<template>
  <Layout>
    <section class="pb-100 bg-dark showcase_5">
      <div class="container px-xl-0">
        <div class="row justify-content-center text-center color-white">
          <div class="col-xl-6 col-lg-8">
            <h2>媲美SBL的隊伍陣容</h2>
            <div class="mt-25 mb-40 f-22 text-adaptive">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis quibusdam consequuntur asperiores repudiandae nihil est eius eveniet itaque at natus.
            </div>
          </div>
        </div>
        <div class="row justify-content-center text-center text-md-left">
          <div class="col-xl-10 col-lg-10">
            <div class="row">
              <div class="mt-30 col-xl-3 col-md-4 col-sm-6 col-6" v-for="(edge, index) in $page.teams.edges" data-aos-duration="600" data-aos="fade-down" data-aos-delay="0">
                <img class="radius10 noradius_bottom w-full" :src="`/teams/${edge.node.shortName}.png`" />
                <div class="px-30 pt-20 pb-30 bg-white radius10 noradius_top inner">
                  <div class="mb-10 f-22 title">{{ edge.node.name }}</div>
                  <div class="mb-10 f-16 semibold">{{ edge.node.ofWonGames }}勝</div>
                  <div class="color-heading text-adaptive">{{ edge.node.desc }}</div>
                  <g-link class="mt-20 btn btn-secondary sm border-gray color-main" :to="edge.node.path">Lineup</g-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<page-query>
query Teams {
  teams: allTeams(sort: { by: "name", order: ASC }) {
    edges {
      node{
        id
        name
        desc
        shortName
        ofPlayers
        ofWonGames
        path
      }
    }
  }
}
</page-query>

<script>
import Layout from '~/layouts/Default.vue'
export default {
  components: {
    Layout
  },
  metaInfo: {
    title: 'Teams',
  }
}
</script>
