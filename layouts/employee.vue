<template lang="pug">
  .page
    lazy-ui-scroll-panel(:scroll="false")
      lazy-dashboard-header(slot="header")
      nuxt-child
</template>

