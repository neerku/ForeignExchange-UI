<template lang="pug">
  .tabs
    a.tab(v-for="tab, i in tabs", :key="i", :class="{ selected: isSelected(tab)}", @click="select(tab)")
      i.nu(v-if="tab.icon" :class="`nu-${tab.icon}`")
      span(v-if="tab.label") {{ tab.label }}
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    icon: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      selected: null
    }
  },
  watch: {
    tabs() {
      this.selectedTab0()
    },
    selected() {
      this.$emit('change', this.selected)
    }
  },
  mounted() {
    this.selectedTab0()
  },
  methods: {
    select(tab) {
      this.selected = tab
    },
    isSelected(tab) {
      return this.selected && this.selected.label === tab.label
    },
    selectedTab0() {
      this.selected = this.tabs && this.tabs[0]
        ? this.tabs[0]
        : null
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.tabs
  margin: 0
  +flex
  .tab
    display: inline-block
    opacity: 0.8
    font-size: 1rem
    padding: $s
    font-weight: 500
    +flex
    &.selected
      opacity: 1
      border-bottom-color: $primary
      background-color: $white
    i.nu + span
      margin-left: $s50
  &.fill
    +flex-fill
    .tab
      flex: 1
      +flex(center, center)
  &.pill
    .tab
      padding: $s25 $s
      border-radius: 3rem
      margin: $s25
      +border
      &.selected
        border-color: $primary
</style>