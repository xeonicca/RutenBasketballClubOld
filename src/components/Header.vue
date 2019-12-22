<template>
  <nav class="pt-30 pb-30 bg-dark lh-40 text-center navigation_19">
    <div class="container px-xl-0">
      <div class="row justify-content-between align-items-center">
        <div class="col-lg-6 text-lg-left">
          <g-link class="logo link color-white" to="/">{{ $static.metaData.siteName }}</g-link>
        </div>
        <div class="col-lg-6 text-lg-right">
          <g-link class="link color-white mr-20" to="/about">關於</g-link>
          <g-link class="link color-white mr-20" to="/teams">隊伍</g-link>
          <!-- <g-link class="link color-white mr-20" to="/teams">球員</g-link> -->
          <g-link class="link color-white mr-20" to="/games">比賽回顧</g-link>
          <!-- <div class="d-inline-block">
            <a href="#" class="link color-white mx-20"><i class="fab fa-facebook-square"></i></a>
            <a href="#" class="link color-white ml-20"><i class="fab fa-youtube"></i></a>
          </div> -->
        </div>
      </div>
    </div>
  </nav>
</template>


<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>