<template lang="pug">
.donut.chart
  apexchart(type="donut" width="350" :options="chartOptions" :series="series")
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    data: {
      type: Array,
      default: () => []
    },
    labels: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      series: this.data,
      chartOptions: {
        chart: {
          type: 'donut',
        },
        labels: this.labels,
        colors: ['#eac842', '#a2b86d', '#5ca793', '#1395b9', '#117899', '#105b78', '#0d3d54', '#f16c21', '#ef8b2d', '#ecaa39' ],
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          pie: {
            donut: {
              size: '40%'
            }
          }
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
          text: this.title || ''
        }
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/style/config'
@import 'assets/style/mixins'
</style>