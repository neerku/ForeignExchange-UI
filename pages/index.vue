<template lang="pug">
  .container
    .drop-down
      dropdown.width(
            :options='currencies',
            appendTo='body',
            placeholder="Select a currency",
            v-model='currency',
          )
      dropdown.width(
            :options='currencies',
            appendTo='body',
            placeholder="Select a currency",
            v-model='currency2',
          )
    .container-body
      .split
        apexchart( type="candlestick" height="490" width="750" :options="chartOptions1" :series="series2")
      .split
      //- .split
      //- .split
</template>

<script>
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr'
export default {
  layout: 'landing',
  data() {
    return {
      currencies: ['US'],
      currency: null,
      currency2: null,
      series2: [
        {
          data: [],
        },
      ],
      chartOptions1: {
        chart: {
          type: 'candlestick',
          height: 490,
          id: 'candles',
          toolbar: {
            autoSelected: 'pan',
            show: true,
          },
          zoom: {
            enabled: true,
          },
        },
        plotOptions: {
          candlestick: {
            colors: {
              upward: '#3C90EB',
              downward: '#DF7D46',
            },
            wick: {
              useFillColor: true,
            },
          },
        },
        xaxis: {
          type: 'datetime',
        },
      },
      chartOptions: {
        chart: {
          id: 'vuechart-example',
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998],
        },
      },
      series: [
        {
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91],
        },
      ],
    }
  },
  created() {
    this.onSlotChangeSubscriber()
  },

  methods: {
    onSlotChangeSubscriber() {
      const subscription = new HubConnectionBuilder()
        .withUrl(process.env.WS_BASE_URL)
        .configureLogging(LogLevel.Information)
        .build()

      subscription.start()

      subscription.on('BTCToCurrencyCandle', (data) => {
        this.transformCandleData(data)
      })
      subscription.on('BTCToCurrencyEMA', (res) => {
        this.transformEMAData(res)
      })
    },

    transformCandleData(data) {
      const dataArray = []
      data.forEach((d) => {
        if (d.candlestickId.symbol === 'BTC-USD') {
          const record = {
            x: Date.parse(d.candlestickId.time),
            y: [d.open, d.high, d.low, d.close],
          }
          dataArray.push(record)
        }
      })
      this.series2[0].data = dataArray
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
    updateChart() {
      const max = 90
      const min = 20
      const newData = this.series[0].data.map(() => {
        return Math.floor(Math.random() * (max - min + 1)) + min
      })

      const colors = ['#008FFB', '#00E396', '#FEB019', '#FF4560', '#775DD0']

      // Make sure to update the whole options config and not just a single property to allow the Vue watch catch the change.
      this.chartOptions = {
        colors: [colors[Math.floor(Math.random() * colors.length)]],
      }
      // In the same way, update the series option
      this.series = [
        {
          data: newData,
        },
      ]
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
      width: 48%
      border: 1px solid #cccccc47
      box-shadow: 0.1px 10px 15px -3px rgba(0,0,0,0.1)
      margin: 15px
  .drop-down
    display: flex
    justify-content: flex-end
    .width
      width: 250px
      margin: 10px
</style>
