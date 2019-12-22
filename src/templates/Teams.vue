<template>
<!-- This is the Event Details View Page-->
  <Layout>
    <section class="pt-25 pb-100 bg-dark team_4">
      <div class="container px-xl-0">
        <div class="row justify-content-center text-center text-md-left">
          <div class="mt-30 col-xl-3 col-md-4 col-sm-8">
            <img class="radius10 noradius_bottom w-full" :src="`/teams/${$page.team.shortName}.png`" />
            <div class="px-30 pt-20 pb-30 bg-white radius10 noradius_top inner">
              <div class="mb-10 f-22 bold title">{{ $page.team.name }}</div>
              <div class="mb-10 f-18 semibold">{{ $page.team.totalGamesWon }}勝</div>
              <div class="color-heading text-adaptive">{{ $page.team.desc }}</div>
            </div>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-8">
            <div class="row">
              <div class="col-12 color-white">
                <h2 class="f-30 mt-75 mb-50">球員名單</h2>
              </div>
              <div v-for="player in $page.teamPlayers.edges" class="mb-50 col-lg-3 col-md-4 col-sm-6 text-center">
                <a href="#" class="link color-white">
                  <img :src="`http://tinygraphs.com/spaceinvaders/${encodeURIComponent(player.node.name)}?theme=frogideas&numcolors=4&size=220&fmt=svg`" class="radius_full" alt="" width="100">
                  <div class="mt-15 mb-10 f-22 title">{{ player.node.name }}</div>
                </a>
                <div class="block_socials">
                  <a href="#" target="_blank" class="link color-white"><i class="fab fa-skype mr-5"></i><span class="color-twitter vmiddle">{{ player.node.skype }}</span></a>
                  <!-- <a href="#" target="_blank" class="link color-white mr-25"><i class="fab fa-facebook-square"></i></a>
                  <a href="#" target="_blank" class="link color-white mr-25"><i class="fab fa-dribbble"></i></a>
                  <a href="#" target="_blank" class="link color-white mr-25"><i class="fab fa-instagram"></i></a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
</template>

<script>
import moment from 'moment'
import Layout from '~/layouts/Default.vue'

export default {
  components: {
    Layout
  }
}
</script>

<page-query>
query Team ($id: String!) {
  team: teams(id: $id) {
    id
    name
    shortName
    players
    captain
    totalGamesWon
    desc
  }

  teamPlayers:allPlayers(filter: {
    team: {
      contains: [$id]
    }
  }){
    edges {
      node {
        id
        name
        skype
      }
    }
  }
}
</page-query>

<page-query>
query ($id: String!) {
  allPlayers(filter: {
    team: {
      contains: [$id]
    }
  }){
    edges {
      node {
        id
        name
      }
    }
  }
}
</page-query>