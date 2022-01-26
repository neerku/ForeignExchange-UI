<template lang="pug">
.line-chart
  apexchart(type="line" height="300" width="100%" :options="chartOptions" :series="series")
</template>

<script>
import m from 'moment'

export default {
  data() {
    return {
      tabs: [
        'Year',
        'Month',
        'Week',
        'Day'
      ],
      selected: null,
      series: [
        {
          name: 'Completed',
          data: ['10', '27', '35', '60', '68', '55', '34']
        },
        {
          name: 'Cancelled',
          data: ['2', '14', '20', '45', '23', '22', '36']
        },
        {
          name: 'No Show',
          data: [0, 0, 0, 0, 0, 0, 2]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          },
          toolbar: {
            show: false
          },
        },
        markers: {
          size: 5,
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        colors: ['#1fba90', '#ba1f34', '#6d707c'],
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: m.weekdaysShort()
        }
      },
    }
  },
  methods: {
    isSelected(tab) {
      return this.selected === tab
    },
    select(tab) {
      this.selected = tab
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/style/config'
@import 'assets/style/mixins'


.tabs
  border: 1px solid $neutral-05
  +flex($h: space-between, $v: flex-end)
  border-radius: 5rem
  padding: 0 $s50
  margin: $s50 0 $s50 auto
  width: 20rem
  a.tab
    margin: 0 $s50
    background: transparent
    padding: $s50
    &:hover
      background: $app-header-bg
      color: $white
    &.selected
      background: $app-header-bg
      color: $white

.drop-down
  +flex-fill
  padding: $s*0.5
  width: 15rem
  background-color: $tertiary
  border-radius: 3px
  height: 2rem
  color: $white
  .selected
    +flex
    span
      display: inline-block
      padding: 0 $s*0.5
      color: $white
</style>