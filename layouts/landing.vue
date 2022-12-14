<template lang="pug">
  .page
      .header
        .title
          | PeerIslands Voice Mongo
        .link
          nuxt-link.route(to="/")
            | Dashboard
      main
        nuxt-child
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.page
  height: 100vh
  height: calc(var(--vh, 1vh) * 100)
  width: 100%
  overflow: hidden
  background-color: white
  .header
    display: flex
    align-items: center
    justify-content: space-between
    border: 1px solid #e0e0e0
    box-shadow : 0 1px 2px 0 #0c1c2752, 0 2px 6px 2px #0c1c2773
    height:65px
    padding: 15px
    text-transform: capitalize
    background-color: #0C1C27
    color: white
    border-color: #0C1C27
    font-size: 20px
  .link
     font-size: 14px
     display: flex
     justify-content: space-between
     .route
       color: white
       margin: 15px
       text-decoration: none
     .nuxt-link-exact-active
       border-color: rgb(10, 208, 91)
       border-bottom-style: solid


main
  height: 100%
  overflow: hidden
  // width: 1200px
  max-width: 100vw
  padding: $s
  margin: 0 auto
  +breakpoint($mobile-sm)
    padding:0.25rem
</style>
