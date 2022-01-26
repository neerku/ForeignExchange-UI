<template lang="pug">
  .promo
    h1
      | {{ $t('promo1') }}
      br/
      | {{ $t('promo2') }}
    h2 {{ $t('promo3') }}
</template>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.promo
  +breakpoint($tablet)
    margin-top: $s2
  h1
    letter-spacing: -1.5px
    color: $white
    text-align: left
    font-size: 4.5vw
    line-height: 1.2
    white-space: wrap
    +breakpoint($tablet)
      font-size: 3.5rem
    +breakpoint($desktop)
      font-size: 3.5rem
      text-align: center
  h2
    color: $white
    +breakpoint($tablet)
      font-size: 1rem
      text-align: center

  +breakpoint($mobile-sm)
  .promo
    display: none
+breakpoint($mobile-lg)
  .promo
    display: none
</style>