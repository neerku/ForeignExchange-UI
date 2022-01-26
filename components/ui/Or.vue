<template lang="pug">
  .or
    span OR
</template>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.or
  padding: $s 0
  margin: $s 0
  +flex(center, center)
  position: relative
  span
    display: inline-block
    padding: $s
    background: $white
    position: absolute
    z-index: 2
  &::before
    content: ""
    height: 2px
    background-color: $neutral-05
    +absolute
    width: 100%
</style>