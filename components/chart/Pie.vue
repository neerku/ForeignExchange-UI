<template lang="pug">
.pie-chart.chart
  apexchart(type="pie" width="500", height="100%" :options="chartOptions" :series="series")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    data: {
      type: Array,
      default: () => []
    },
    labels: {
      type: Array,
      default: () => []
    },
  },
  data() {
    return {
      series: this.data,
      chartOptions: {
        chart: {
          type: 'pie',
        },
        labels: this.labels,
        colors: ['#1fba90', '#ba1f34', '#6d707c'],
        legend: {
          position: 'bottom'
        },
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }],
        title: {
          text: this.title
        },
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/style/config'
@import 'assets/style/mixins'
</style>