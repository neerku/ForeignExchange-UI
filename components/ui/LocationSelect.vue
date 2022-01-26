<template lang="pug">
  .location-select(:class="{ dark: darkMode }")
    dropdown.sm.icon(v-model="selected", :options="options", :filter="showFilter" optionLabel="facilityName", optionValue="_id" @change="select", :class="{ dark: darkMode }")
    i.nu.nu-location-filled
</template>

<script>
// import m from 'moment'
import { mapActions, mapGetters } from 'vuex'
// import visitUpdate from '~/queries/updateVisitSubscription.gql'
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: null,
    },
    darkMode: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      selected: null,
    }
  },
  computed: {
    ...mapGetters(['selectedDate']),
    showFilter() {
      return this.options?.length > 7
    },
  },
  watch: {
    options() {
      if (this.options && this.options[0]) {
        this.selected = this.options[0]._id
      }
      if(localStorage.getItem('selectedLocation')){
      this.selected = localStorage.getItem('selectedLocation')
    }
    },
  },

  mounted() {
    if (this.options && this.options[0]) {
      this.selected = this.options[0]._id
    }

    if(localStorage.getItem('selectedLocation')){
      this.selected = localStorage.getItem('selectedLocation')
    }
  },
  methods: {
    ...mapActions(['onLocationChanged']),
    select() {
      localStorage.setItem('selectedLocation',this.selected)
      this.onLocationChanged(this.selected)
      this.$emit('change', this.selected)
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.location-select
  min-width: 15rem
  position: relative
  color: $primary
  &.dark
    color: $white
  i.nu
    +absolute-w
    padding: 0.5rem
</style>
