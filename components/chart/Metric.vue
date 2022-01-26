<template lang="pug">
  .metric(v-if="data")
    h5.title
      span {{ data.from }}
      i.nu.nu-arrow-right
      span {{ data.to }}
    .avg
      small Avg.
      h2 {{ data.avg }}
    .min-max
      .min
        small Min
        h5 {{ data.min }}
      .max
        small Max
        h5 {{ data.min }}

</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: null
    },
  },
}
</script>


<style lang="sass" scoped>
@import 'assets/style/config'
@import 'assets/style/mixins'

.metric
  h1, h2, h4, h5, h6
    margin: 0
  .title
    padding: $s50
    font-weight: 600
    +flex(center, center)
    i.nu
      display: inline-block
      padding: 0 $s25
      opacity: 0.4
      font-size: 1.5rem
  .avg
    background-color: $neutral-01
    padding: $s50 0
    text-align: center
  .min-max
    opacity: 0.7
    +flex-fill
    .min, .max
      flex: 1
      padding: $s25 $s
      small
        font-size: 0.6rem
    .max
      text-align: right
</style>