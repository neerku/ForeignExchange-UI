<template lang="pug">
  .page
    .div
      //- header(slot="header")
      //-   nuxt-link.logo(to="/")
      //-     .logo(v-if="location && location.name")
      //-       img(:src="location.brandUrl")
      //-     .logo(v-else)
      //-         img(src="~/assets/image/wellstreet-stacked-white-w400.png")

          //- a.login(@click="initiatelogin()") Employee Login
      main
        nuxt-child
      confirm-dialog
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters(['location'])
  },
  mounted() {
    if(this.$auth.loggedIn){
      this.$router.push('/dashboard');
    }
    this.calculateVh()
    window.addEventListener('resize', this.calculateVh)
  },
  methods: {
    calculateVh() {
      const vh = window.innerHeight * 0.01
      document.documentElement.style.setProperty('--vh', `${vh}px`)
    },
    initiatelogin() {
      if(!this.$auth.loggedIn){
        this.$auth.loginWith('aad')
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

$bg-landscape: 'https://www.wellstreet.com/wp-content/uploads/2021/02/piedmont-hero-mother-child-2021-1300x690-1.jpg'
$bg-portrait: 'https://www.wellstreet.com/wp-content/uploads/2021/02/piedmon-hero-mother-child-mobile-2021.jpg'
.page
  height: -webkit-fill-available
  height: 100vh
  width: 100%
  overflow: hidden
  overflow-y: scroll
  background-color: $primary
  background-image: url($bg-landscape)
  background-repeat: no-repeat
  background-position: top center
  background-size: cover
  +breakpoint($tablet)
    background-image: url($bg-portrait)
  ::-webkit-scrollbar
    content: ""
    background: $neutral-02
    width: 10px
  ::-webkit-scrollbar-track
    background-color: $neutral-02
  ::-webkit-scrollbar-thumb
    background-color: rgba($neutral-04, 0.9)
    border: 1px solid $neutral-04
    min-height: 30px
    border-radius: 2px
  ::-webkit-scrollbar-thumb:hover
    background-color: rgba($neutral-06, 0.9)
    border: 1px solid $neutral-06

header
  +flex($h: space-between)
  width: 1200px
  max-width: 100vw
  padding: $s
  margin: 0 auto
  .logo
    max-height: 5rem
    max-width: 10rem
  .login
    display: inline-block
    text-decoration: none
    color: $white
    margin: 0
    padding: $s*0.5 $s
    background-color: rgba($primary, 0.5)
    border-radius: 5px
    &:hover
      background-color: $primary

main
  height: 100%
  overflow: hidden
  overflow-y: auto
  width: 1200px
  max-width: 100vw
  max-height: 100vh
  padding: $s
  margin: 0 auto
  +breakpoint($mobile-lg)
  +breakpoint($mobile-sm)
  +breakpoint($tablet)
    padding-bottom: 110px
</style>
