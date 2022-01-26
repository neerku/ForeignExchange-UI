<template lang="pug"> 
  .tools
    .toolbar
      a(@click="select('Search')")
        span.icon
          i.nu.nu-search
      //- a(@click="select('Conversations')")
      //-   span.icon
      //-     ui-chat-icon(:count="12")
      a(@click="select('Notifications')")
        span.icon
          ui-alert-icon(:count="notificationCount")
      a(v-if="stepsFetch && stepsFetch.formTemplateName" @click="select('Check-in Request')")
        span.icon
          i.nu.nu-person-plus
      a(@click="select('Share Link')")
        span.icon
          i.nu.nu-message
    main(v-if="selected")
      ui-scroll-panel(:scroll="false")
        .header(slot="header")
          h3.title {{ selected }}
          a(@click="deselect()")
            i.nu.nu-times
        lazy-queue-register(v-if="this.selected === 'Check-in Request'" :stepsFetch="stepsFetch" @on-success="deselect")
        lazy-queue-Conversations(v-if="this.selected === 'Conversations'")
        lazy-queue-notifications(v-if="this.selected === 'Notifications'")
        lazy-queue-share-link(v-if="this.selected === 'Share Link'")
        lazy-queue-search(v-if="this.selected === 'Search'")

    toast(position="top-right")</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  props: {
    stepsFetch: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      selected: null,
      notificationCount: 0,
    }
  },
  computed: {
    ...mapGetters([
      'locations',
      'selectedLocation',
      'notifications',
      'employeeCheckInSelect',
    ]),
  },
  watch: {
    selectedLocation() {
      this.deselect()
    },
    employeeCheckInSelect() {
      if (this.employeeCheckInSelect) this.select('Check-in Request')
    },
    notifications() {
      this.notificationCount = this.notifications.filter(
        (x) => x.isSeen === false
      ).length
    },
  },
  methods: {
    ...mapActions(['setEmployeeCheckInSelect']),

    select(module) {
      this.selected = module
    },
    deselect(resp) {
     if(this.selected === 'Notifications'){
        this.$store.dispatch('clearNotofication')
     }
      const payload = {
        isSelected: false,
        slot: {},
        visitInfo: {},
      }
      this.$store.dispatch('setEmployeeCheckInSelect', payload)
      this.selected = null
      if (resp) {
        this.$toast.add({
          severity: resp.status,
          detail: resp.message,
          life: 3000,
        })
      }
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

a
  cursor: pointer

.tools
  +flex($v: flex-start)
  height: 100%
  margin-right: $s
  .toolbar
    +flex-v($h: center)
    background-color: $toolbar-bg
    color: $toolbar-fg
    width: 3rem
    border-radius: 5px
    margin: $s
    margin-right: $s*0.25
    a
      font-size: $s*1.5
      padding: $s*0.5
      span.icon
        opacity: 1
  main
    align-self: stretch
    width: 23rem
    background-color: $toolbar-bg
    color: $toolbar-fg
    border-radius: 5px
    margin: $s 0
    +breakpoint($tablet)
      height: 80%
    .header
      +flex-fill
      padding: $s*0.5 $s
      .title
        margin: 0
</style>
