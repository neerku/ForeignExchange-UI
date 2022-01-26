<template lang="pug">
  .login
    .form-header(slot="header")
      h3 Employee Login
      .form-content
        .card
          .control
            label Employee ID
            .input
              input(type="text")
          .control
            label Password
            .input
              input(type="text")
          .control
      .form-footer
        a(href="#") Forgot Password?
      .actions
        .action
          nuxt-link.btn(to="/dashboard")
            | Login&nbsp;&nbsp;
            i.nu.nu-arrow-right
</template>

<script>
export default {
  props: {
    location: {
      type: String,
      default: null
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.login
  background-color: $white
  padding: $s
  border-radius: 0.5rem
  width: 400px
  max-width: 100%
  .form-header
    padding: $s
    border-bottom: 1px solid $neutral-04
  .form-content
    padding: $s50 0
.actions
  +border-top
  +flex($h: fill)
  padding: $s 0
  .action
    flex: 1
  a.btn
    display: block
    text-decoration: none
    padding: $s
    border-radius: 5px
    background-color: $accent
    color: $white
    font-size: 1.25rem
    font-weight: 600
    text-transform: uppercase
    text-align: center
    &.primary
      background-color: $primary
    &:hover
      background-color: $primary

.control
  margin-bottom: $s
  &:last-child
    margin-bottom: 0
  label
    display: block
    margin: $s50 0 $s25
  input, textarea
    width: 100%
    padding: $s*0.5 $s
  .input.dob
    +flex
    .separator
      display: inline-block
      padding: 0 $s*0.25
      opacity: 0.3
    input
      width: 4rem
</style>
