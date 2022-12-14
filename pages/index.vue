<template lang="pug">
.container
  .container-body
    <div>
      <button :class="`mic`" @click="ToggleMic">Record</button>
      <div v-text="transcript"></div>
    </div>
</template>

<script>


const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
const sr = new Recognition()

export default {
  layout: 'landing',
  data() {
    return {
      dataPoint: ['BTC-USD', 'BTC-GBP', 'BTC-INR', 'BTC-KYD'],
      colors: ['#4caf50', '#df514d'],
      charts: [],
      subscription: null,
      transcript :'',
      isRecording : false
    }
  },
  created() {
    sr.continuous = true
    sr.interimResults = true
  },
  mounted() {
    sr.onstart = () => {
      console.log('SR Started')
      this.isRecording= true
    }

    sr.onend = () => {
      console.log('SR Stopped')
      this.isRecording= false
    }

    sr.onresult = (evt) => {
      for (let i = 0; i < evt.results.length; i++) {
        const result = evt.results[i]

        if (result.isFinal) this.CheckForCommand(result)
      }

      const t = Array.from(evt.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join('')

      this.transcript= t
    }
  },

  methods: {
    CheckForCommand(result) {
      const t = result[0].transcript
      if (t.includes('stop recording')) {
       sr.stop()
      } else if (
        t.includes('what is the time') ||
        t.includes("what's the time")
      ) {
        sr.stop()
        alert(new Date().toLocaleTimeString())
        setTimeout(() =>  this.sr.start(), 100)
      }
    },

    setMicOnTime(){
      setTimeout(()=> {sr.stop()},5000)
    },

    ToggleMic() {
      if (this.isRecording) {
        sr.stop()
      } else {
        sr.start()
        this.setMicOnTime()

      }
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
