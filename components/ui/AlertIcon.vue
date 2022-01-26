<template lang="pug">
  span.chat-icon(:class="{ none: count === -1 }")
    span.icon
      i.nu.nu-notification
    span.badge(v-if="count > 0") {{ count }}
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.chat-icon
  position: relative
  cursor: pointer
  .icon
    opacity: 0.8
  span.badge
    +absolute-ne
    +flex-distribute
    padding: $s*0.2
    font-size: 0.8rem
    font-weight: 600
    background-color: $accent
    color: $white
    min-width: 1.5rem
    height: 1.5rem
    border-radius: 1.5rem
    line-height: 1.5rem
    text-align: center
    right: -1rem
    top: -0.5rem
  &.none .icon
    opacity: 0.3
  &:hover .icon
    opacity: 1
</style>