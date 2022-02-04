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
        :options='option3',
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
    .split
        table
            tr
                td x
                td xvalue
            tr
                td y
                td xvalue
            tr
                td y1
                td xvalue
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
      currentPrice: null,
      option1: {
        chart: {
          id: 'tw',
          group: 'social',
          type: 'line',
          height: 60,
        },
        colors: ['#546E7A'],
        xaxis: {
          type: 'datetime',
        },
      },
      option2: {
        chart: {
          id: 'tw1',
          group: 'social',
          type: 'line',
          height: 60,
        },
        colors: ['#546E7A'],
        xaxis: {
          type: 'datetime',
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
        xaxis: {
          type: 'datetime',
        },
      },
      option4: {
        chart: {
          id: 'tw2',
          group: 'social',
          type: 'line',
          height: 60,
        },
        colors: ['#546E7A'],
        xaxis: {
          type: 'datetime',
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
      this.subscription.on('BTCToCurrencyEMA', (res) => {
        this.transformEMAData(res)
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
            const dd = chart.series[0].data.slice(0, 49)
            dd.push(record)
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
        if (d.candlestickId.symbol === this.$route.params.currency) {
          const record = {
            x: Date.parse(d.candlestickId.time),
            y: [d.ema_10, d.ema_5, d.price, d.close],
          }
          this.currentPrice = d.price
          dataArray.push(record)
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
