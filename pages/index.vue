<template lang="pug">
.container
  .container-body
    .split(v-for='c in charts', @click='navigate(c)')
      apexchart(
        :options='c.options',
        width='600px',
        height='300',
        :series='c.series'
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
      subscription: null,
    }
  },
  created() {
    this.onSlotChangeSubscriber()
  },
  mounted() {
    this.generateCharts()
  },
  beforeDestroy() {
    this.subscription.stop()
  },
  methods: {
    generateCharts() {
      const options = {
        title: {
          text: '',
        },
        chart: {
          toolbar: {
            show: false,
          },
          type: 'candlestick',
          id: 'candles',
          brush: {
            enabled: false,
            target: undefined,
            autoScaleYaxis: false,
          },
          redrawOnParentResize: true,
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#4caf50',
              downward: '#df514d',
            },
            wick: {
              useFillColor: true,
            },
          },
        },
        xaxis: {
          type: 'datetime',
        },
      }

      this.dataPoint.forEach((data, index) => {
        this.charts.push({
          id: `chart${index}`,
          currency: data,
          series: [
            {
              data: [],
            },
          ],
          options: {
            ...options,
            title: {
              text: data,
            },
          },
        })
      })
    },

    onSlotChangeSubscriber() {
      this.subscription = new HubConnectionBuilder()
        .withUrl(process.env.WS_BASE_URL)
        .configureLogging(LogLevel.Information)
        .build()
      this.subscription.start()

      this.subscription.on('BTCToCurrencyCandle', (data) => {
        this.transformCandleData(data)
      })
    },

    transformCandleData(data) {
      data.forEach((d) => {
        this.charts.forEach((chart) => {
          if (d.candlestickId.symbol === chart.currency) {
            const record = {
              x: Date.parse(d.candlestickId.time),
              y: [d.open, d.high, d.low, d.close],
            }
            chart.series[0].data.push(record)
            window.dispatchEvent(new Event('resize'))
          }
        })
      })
      window.dispatchEvent(new Event('resize'))
      this.$forceUpdate()
    },

    transformEMAData(data) {
      const dataArray = []
      data.forEach((d) => {
        if (d.candlestickId.symbol === 'BTC-USD') {
          const record = {
            x: Date.parse(d.candlestickId.time),
            y: [d.ema_10, d.ema_5, d.price, d.close],
          }
          dataArray.push(record)
        }
      })
    },
    
    navigate(data) {
      this.$router.push({
        path: `/currency/${data.currency}`,
      })
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
    .split
      display: flex
      padding: 8px
      width: 650px
      height: 350px
      border: 1px solid #cccccc47
      box-shadow: 0.1px 10px 15px -3px rgba(0,0,0,0.1)
      margin: 8px
      cursor: pointer
  .drop-down
    display: flex
    justify-content: flex-end
    .width
      width: 250px
      margin: 10px
</style>
