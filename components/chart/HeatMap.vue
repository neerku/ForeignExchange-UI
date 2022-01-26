<template lang="pug">
.heat-map.chart
  apexchart(type="heatmap" height="500" width="500" :options="chartOptions" :series="series")
</template>

<script>
import heatmap from '~/data/heatmap'

export default {
  data() {
    return {
      series: heatmap,
      chartOptions: {
        chart: {
          height: 350,
          type: 'heatmap',
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        colors: ["#1FBA90"],
        title: {
          text: 'Hourly Visits'
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