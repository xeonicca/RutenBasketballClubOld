<template>
  <footer class="pt-45 pb-45 bg-dark color-white text-center footer_8">
    <div class="container px-xl-0">
      <div class="row justify-content-center align-items-center">
        <div class="col-lg-5 text-xl-left">
          <a href="#" class="logo link color-white">{{ $static.metaData.siteName }}</a>
        </div>
        <div class="mt-10 mb-10 my-xl-0 col-xl-4 lh-40">
          <g-link class="f-14 text-uppercase sp-20 link color-white mr-15" to="/about">關於</g-link>
          <g-link class="f-14 text-uppercase sp-20 link color-white mr-15" to="/teams">隊伍</g-link>
          <g-link class="f-14 text-uppercase sp-20 link color-white mr-15" to="/teams">比賽回顧</g-link>
        </div>
        <div class="col-lg-3 text-xl-right socials">
          <a href="#" class="mx-15 w-40 btn sm border-transparent-white px-0"><i class="fab fa-facebook-f"></i></a>
          <a href="#" class="ml-15 w-40 btn sm border-transparent-white px-0"><i class="fab fa-youtube"></i></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>