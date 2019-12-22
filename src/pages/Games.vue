<template>
  <Layout>
    <section class="pt-105 pb-100 bg-dark showcase_5">
      <div class="container px-xl-0">
        <div class="row justify-content-center text-center color-white">

          <div class="col-xl-10">
            <h2 class="mb-10 small text-center">比賽結果</h2>
            <div class="pt-40 px-60 pt-60 table-responsive-shadow bg-light">
              <div class="table-responsive-xl">
                <table class="table table-borderless table-striped m-0">
                  <thead>
                    <tr class="color-heading f-14 text-uppercase sp-20">
                      <th scope="col" class="semibold">日期</th>
                      <th scope="col" class="semibold">隊伍1</th>
                      <th scope="col" class="semibold">隊伍2</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(edge, index) in $page.games.edges">
                      <td>{{edge.node.datePlayed}}</td>
                      <td>
                        <g-link class="semibold mr-15" :to="$options.filters.teamPath(edge.node.homeTeam, $page.teams)">{{edge.node.homeTeam | teamName($page.teams) }}</g-link> <span class="f-22 color-dribbble bold">{{edge.node.homeScore}}</span>
                      </td>
                      <td>
                        <g-link class="semibold mr-15" :to="$options.filters.teamPath(edge.node.awayTeam, $page.teams)">{{edge.node.awayTeam | teamName($page.teams) }}</g-link> <span class="f-22 color-dribbble bold">{{edge.node.awayScore}}</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
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
  games: allGames(sort: { by: "datePlayed", order: DESC }) {
    edges {
      node{
        datePlayed
        homeTeam
        awayTeam
        homeScore
        awayScore
        homeWon
        awayWon
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
    Layout
  },

  filters: {
    teamName(teamList, teams) {
      let [id] = teamList
      let t = teams.edges.find(v => {
        return v.node.id === id
      })

      return t && t.node.name || ''
    },

    teamPath(teamList, teams) {
      let [id] = teamList
      let t = teams.edges.find(v => {
        return v.node.id === id
      })

      return t && t.node.path || ''
    }
  }
}
</script>