<template lang="pug">
  .profile-dialog(v-if="profile && initials.length > 0")
    .avatar
      span {{ initials }}
    .details
      h3 {{ profile.firstName }} {{ profile.lastName }}
      p {{ profile.email }}
      a(@click="$emit('logout')") Logout
</template>

<script>
export default {
  props: {
    profile: { type: Object, default: () => {} }
  },
  computed: {
    initials() {
      const { firstName, lastName } = this.profile
      return `${firstName[0]}${lastName[0]}`
    }
  }
}
</script>


<style lang="sass">
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.profile-dialog
  +flex
  padding: $s
  .avatar
    span
      background-color: $neutral-02
      color: $primary
      display: inline-block
      padding: $s
      margin-right: $s2
      width: 5rem
      height: 5rem
      border-radius: 5rem
      font-size: 2rem
      font-weight: 700
      text-align: center
  a
    color: $accent

</style>