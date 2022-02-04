<template lang="pug">
.container
  .container-body 
    .split1
      apexchart(
        :options='option1',
        width='700px',
        height='150px',
        :series='series1'
      )
      apexchart(
        :options='option2',
        width='700px',
        height='150px',
        :series='series2'
      )
      apexchart(
        :options='option3',
        width='700px',
        height='150px',
        :series='series3'
      )
      apexchart(
        :options='option4',
        width='700px',
        height='150px',
        :series='series4'
      )
    .split2
        table
            tr
                td Currency
                td {{this.$route.params.currency}}
            tr
                td Current Rate
                td {{currentRate}}
            tr
                td Maximum Rate 
                td {{maxRate}}
            tr
                td Minimum Rate
                td {{minRate}}   

        apexchart(
          :options='chartOptions',
          width='800px',
          height='350px',
          :series='series',
        )
    
</template>

<script>
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
export default {
  layout: 'landing',
  data() {
    return {
      dataPoint: ['BTC-USD', 'BTC-GBP', 'BTC-INR', 'BTC-KYD'],
      colors: ['#4caf50', '#df514d'],
      charts: [],
      minRate: 0,
      maxRate: 0,
      currentRate: 0,
      currencyValue: [],
      series: [
        {
          name: 'price',
          type: 'bar',
          data: [],
        },
      ],
      subscription: null,
      currentPrice: null,
      chartOptions: {
        chart: {
          height: 500,
          type: 'line',
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'smooth',
        },
        title: {
          text: 'Price Trend',
          align: 'center',
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          data: [],
          type: 'datetime',
        },
      },
      option1: {
        chart: {
          id: 'tw',
          group: 'social',
          type: 'line',
          height: 60,
          animations: {
            enabled: true,
            easing: 'linear',
            dynamicAnimation: {
              speed: 10,
            },
          },
        },
        colors: ['#FF5733'],
        xaxis: {
          type: 'datetime',
          title: {
            text: 'EMA-10',
          },
        },
      },
      option2: {
        chart: {
          id: 'tw1',
          group: 'social',
          type: 'line',
          height: 60,
        },
        colors: ['#FF9933'],
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'EMA-5',
          },
        },
      },
      option3: {
        chart: {
          id: 'tw3',
          group: 'social',
          type: 'line',
          height: 60,
        },
        colors: ['#546E7A'],
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'Price',
          },
        },
      },
      option4: {
        chart: {
          id: 'tw3',
          group: 'social',
          type: 'line',
          height: 60,
        },
        colors: ['#00E396'],
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          type: 'datetime',
          title: {
            text: 'SMA-10',
          },
        },
      },
      series1: [
        {
          data: [],
        },
      ],
      series2: [
        {
          data: [],
        },
      ],
      series3: [
        {
          data: [],
        },
      ],
      series4: [
        {
          data: [],
        },
      ],
    }
  },
  created() {
    this.onSlotChangeSubscriber()
  },
  mounted() {
    // this.generateCharts()
  },
  beforeDestroy() {
    this.subscription.stop()
  },
  methods: {
    onSlotChangeSubscriber() {
      this.subscription = new HubConnectionBuilder()
        .withUrl(process.env.WS_BASE_URL)
        .configureLogging(LogLevel.Information)
        .build()
      this.subscription.start()
      this.subscription.on('BTCToCurrencyEMA', (res) => {
        this.transformEMAData(res)
      })
      this.subscription.on('currency', (res) => {
        this.transformCurrencyData(res)
      })

      this.subscription.on('CurrencyMinMax', (res) => {
        this.transformCurrencyMinMaxData(res)
      })
    },

    transformEMAData(data) {
      if (this.series1[0].data.length === 0) {
        data.forEach((d) => {
          if (d.candlestickId.symbol === this.$route.params.currency) {
            this.series1[0].data.push({
              x: Date.parse(d.candlestickId.time),
              y: d.emA_10,
            })
            this.series2[0].data.push({
              x: Date.parse(d.candlestickId.time),
              y: d.emA_5,
            })
            this.series3[0].data.push({
              x: Date.parse(d.candlestickId.time),
              y: d.price,
            })
            this.series4[0].data.push({
              x: Date.parse(d.candlestickId.time),
              y: d.smA_10,
            })
          }
        })
        window.dispatchEvent(new Event('resize'))
      }
    },

    transformCurrencyData(data) {
      const dataArray = []
      const dataArray2 = []
      const dataArray3 = []
      data.forEach((d) => {
        if (d.symbol === this.$route.params.currency) {
          dataArray.push(d.price)
          dataArray2.push(Date.parse(d.time))
          dataArray3.push({
            x: Date.parse(d.time),
            y: d.price,
          })
          this.currentRate = d.price
        }
      })
      this.series[0].data = dataArray3
      window.dispatchEvent(new Event('resize'))
    },
    transformCurrencyMinMaxData(data) {
      data.forEach((d) => {
        if (d.symbol === this.$route.params.currency) {
          this.minRate = d.lowest
          this.maxRate = d.highest
        }
      })

      window.dispatchEvent(new Event('resize'))
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.container
    display: flex
    overflow-y: auto
    padding: $s2 0
    height: calc( 100vh - 60px )
    flex-direction: column
.container-body
    display: flex
    flex-wrap: wrap
    width: 100%
    height: calc( 100vh - 60px )
    justify-content: space-evenly
    .split1
        display: flex
        padding: 8px
        width: 750px
        height: 650px
        border: 1px solid #cccccc47
        box-shadow: 0.1px 10px 15px -3px rgba(0,0,0,0.1)
        margin: 8px
        cursor: pointer
        flex-direction: column
    .split2
      display: flex
      padding: 8px
      width: 850px
      height:  650px
      border: 1px solid #cccccc47
      box-shadow: 0.1px 10px 15px -3px rgba(0,0,0,0.1)
      margin: 8px
      cursor: pointer
      flex-direction: column
      table, th, td
        border: 1px solid black
        padding: 15px
      table
        border-collapse: collapse
        width : 97%
        margin : 15px
    .split
      display: flex
      padding: 8px
      width: 650px
      height: 200px
      border: 1px solid #cccccc47
      box-shadow: 0.1px 10px 15px -3px rgba(0,0,0,0.1)
      margin: 8px
      cursor: pointer
      table, th, td
        border: 1px solid black
        padding: 15px
      table
        border-collapse: collapse
        width : 100%
        margin : 15px

.drop-down
    display: flex
    justify-content: flex-end
    .width
        width: 250px
        margin: 10px
</style>
