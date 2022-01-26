<template lang="pug">
  span.status(:class="status")
    i.nu.nu-check(v-if="status")
    i.nu.nu-times(v-else, :class="{highlight : highlight}")
    span.label(v-if="label") {{ label }}
</template>

<script>
export default {
  props: {
    status: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: null
    },
    completed:{
      type: Boolean,
      default: null
    },
    highlight:{
      type: Boolean,
      default: null
    }

  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

span.status
  font-size: 0.7rem
  font-weight: 500
  background-color: $neutral-02
  color: $primary
  padding: $s*0.25 $s*0.5
  border-radius: 3px
  text-transform: uppercase
  white-space: nowrap
  display: flex
  align-items: center
  > *
    opacity: 0.7
  span.label
    margin-left: $s*0.25
  &.success
    background-color: $success
    color: $white
    > *
      opacity: 1
  &.warn
    background-color: $warn
    color: $primary
    > *
      opacity: 1
  &.error
    background-color: $error
    color: $white
    > *
      opacity: 1
  &.warning
    background-color: $warning
    color: $white
    > *
      opacity: 1
.highlight
  color: $error
  font-weight: 600
  font-size: 16px
</style>
