<template>
  <Layout>
    <section class="bg-dark pt-100 pb-100 showcase_5 content_20">
      <div class="container px-xl-0 color-white">
        <div class="row justify-content-center">
          <div class="col-xl-10 col-lg-11">
            <h2 class="small">比賽結果</h2>
            <div class="row">
              <div class="mt-25 col-12 inner">
                <div v-for="games, date, i in gameRecordsByDate" class="pb-50 relative block">
                  <div class="content_20_line"></div>
                  <div
                    class="bg-gray color-heading radius_full w-40 h-40 f-18 medium lh-40 text-center number"
                  >{{ i+1 }}</div>
                  <div class="ml-70 pt-10 block_inner">
                    <div class="f-heading f-18 medium">{{ date }}</div>
                    <div class="mt-20 color-heading text-adaptive">
                      <div class="row">
                        <div v-for="game, i in games" class="col-3">
                          <h4 class="color-white f-18 mb-10 font-weight-normal">Game {{ game.id }} {{ game.memo }}</h4>
                          <table class="bg-light table table-bordered text-center radius5">
                            <tr>
                              <th class="f-18 f-heading bg-gray color-heading">{{ game.firstTeam | teamName($page.teams) }}</th>
                              <th class="f-18 f-heading bg-gray color-heading">{{ game.secondTeam | teamName($page.teams) }}</th>
                            </tr>
                            <tr>
                              <td><span class="f-heading f-30 bold color-heading" :class="{'color-dribbble':game.winnerTeam[0] === game.firstTeam[0]}">{{ game.firstTeamScore }}</span></td>
                              <td><span class="f-heading f-30 bold color-heading" :class="{'color-dribbble':game.winnerTeam[0] === game.secondTeam[0]}">{{ game.secondTeamScore }}</span></td>
                            </tr>
                            <tr>
                              <td colspan="2"><a class="d-block" target="_blank" :href="game.youtubeLink"><i class="color-red fab fa-youtube"></i></a></td>
                            </tr>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
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
query {
  games: allGames(sort: [{ by: "datePlayed", order: DESC }, { by: "id", order: ASC }]) {
    edges {
      node {
        id
        datePlayed
        firstTeam
        secondTeam
        firstTeamScore
        secondTeamScore
        winnerTeam
        youtubeLink
        memo
      }
    }
  }

  teams: allTeams {
    edges {
      node {
        id
        name
        shortName
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
    Layout,
  },
  computed: {
    gameRecordsByDate() {
      return this.$page.games.edges.reduce((all, v) => {
        let thisDate = v.node.datePlayed
        if (thisDate && !all[thisDate]) {
          all[thisDate] = []
        }
        all[thisDate].push(v.node)
        return all
      }, {})
    },
  },
  filters: {
    teamName(teamList, teams) {
      let [id] = teamList
      let t = teams.edges.find(v => {
        return v.node.id === id
      })

      return (t && t.node.name) || ''
    },

    teamPath(teamList, teams) {
      let [id] = teamList
      let t = teams.edges.find(v => {
        return v.node.id === id
      })

      return (t && t.node.path) || ''
    },
  },
  metaInfo: {
    title: 'Games',
  },
}
</script>
