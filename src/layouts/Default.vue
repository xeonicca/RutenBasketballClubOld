<template>
  <div class="layout">
    <!-- <header class="header">
      <strong>
        <g-link to="/" class="handwriting site-title">{{ $static.metaData.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link nav--yellow" to="/">Home</g-link>
        <g-link class="nav__link nav--red" to="/events">Events</g-link>
      </nav>
    </header> -->
    <transition name="fade" appear>
      <main>
        <slot/>
      </main>
    </transition>
    <!-- <footer>
      Built with <a href="https://gridsome.org/docs" target="_blank" rel="noopener" class="link--gridsome">Gridsome</a> by <a href="https://twitter.com/PichuPlayer" target="_blank" rel="noopener" class="link--blue">Tyler</a>
    </footer> -->
  </div>
</template>

<static-query>
query {
  metaData {
    siteName
  }
}
</static-query>