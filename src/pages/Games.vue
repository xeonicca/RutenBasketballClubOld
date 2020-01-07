<template>
  <Layout>
    <section class="pb-100 bg-dark showcase_5">
      <div class="container px-xl-0">
        <div class="row justify-content-center text-center color-white">

          <div class="col-xl-10">
            <h2 class="mb-10 small text-center">比賽結果</h2>
            <div class="pt-40 px-md-60 px-15 pt-60 table-responsive-shadow bg-light">
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
                      <td class="text-center">
                        <g-link class="semibold" :to="$options.filters.teamPath(edge.node.firstTeam, $page.teams)">{{edge.node.firstTeam | teamName($page.teams) }}</g-link><br><span class="f-heading f-40 color-dribbble bold">{{edge.node.firstTeamScore}}</span>
                      </td>
                      <td class="text-center">
                        <g-link class="semibold" :to="$options.filters.teamPath(edge.node.secondTeam, $page.teams)">{{edge.node.secondTeam | teamName($page.teams) }}</g-link><br><span class="f-heading f-40 color-dribbble bold">{{edge.node.secondTeamScore}}</span>
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
        firstTeam
        secondTeam
        firstTeamScore
        secondTeamScore
        winnerTeam
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
  },
  metaInfo: {
    title: 'Games',
  }
}
</script>