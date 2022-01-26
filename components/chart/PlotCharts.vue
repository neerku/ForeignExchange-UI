<template lang="pug">
  .div
    div(:id="id")
</template>

<script>

import 'regenerator-runtime/runtime';
import ChartsEmbedSDK from '@mongodb-js/charts-embed-dom';
import * as Realm from 'realm-web';

const realmApp = new Realm.App({ id: process.env.APP_ID_REALM });

export default {
    props: {
    id: {
      type: String,
      default: null
    },
    chartHeight: {
      type: String,
      default: null
    },
    chartWidth: {
      type: String,
      default: '700px'
    },
    filterQuery: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
     options: this.chartData,
    }
  },
  watch: {
    filterQuery(){
      this.configureCharts()
    },
    id(){
      this.configureCharts()
    }
  },
  mounted () {
    this.configureCharts()
  },
  methods: {
    async configureCharts(){
        const credentials = Realm.Credentials.apiKey(process.env.API_KEY_REALM);
        const sdk = new ChartsEmbedSDK({
              baseUrl: process.env.CHART_BASE_URL,
              });
        const user = await realmApp.logIn(credentials);
        if(user._accessToken){
          const chartPlot = sdk.createChart({ chartId: this.id, width: this.chartWidth,
        height: this.chartHeight, showAttribution: false, filter: this.filterQuery, getUserToken: () => user._accessToken });
        chartPlot.render(document.getElementById(this.id));
        } 
    },
  },
  customFilter(filterData) {
      ChartsEmbedSDK.chartData.filter = filterData;
  }
}
</script>

<style lang="sass" scoped>
@import 'assets/style/config'
@import 'assets/style/mixins'

h2.widgets-title
  margin: $s2 $s2 0
.widgets
  display: grid
  grid-gap: $s
  padding: $s $s2
  &.trend
    grid-template-columns: 100%
  &.visit
    grid-template-columns: 50% 50%
    .distribution
      grid-template-columns: repeat(2, 1fr)
  &.patient
    grid-template-columns: repeat(3, 1fr)
  .widgets
    padding: 0
  .widget
    padding: $s
    +border
    +flex($v: stretch)
    flex-direction: column
    .chart
      +flex(center, center)
      flex: 1
    .header
      +flex($h: right)
  &.metrics
    padding: $s2
    grid-template-columns: repeat(6, 1fr)
    .widget
      padding: 0
</style>