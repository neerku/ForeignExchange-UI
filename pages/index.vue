<template lang="pug">
.container
  .container-body
    .form-content
      .control
        label 
            span Enter your Mongo Connection String
             span.red *
        .input
          input-text(
            v-model='transcript'
          )
        span.red.small(v-if="formError && !firstName") First Name is mandatory 
      <p>Welcome to VoiceMongo</p>
      <p>Message is: {{ transcript }}</p>
      <input v-model="transcript" placeholder="edit me" />
      <button :class="`mic`" @click="ToggleMic">Record</button>
      //- <div v-text="transcript"></div>

</template>
<script>


const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
const sr = new Recognition()

export default {
  layout: 'landing',
  data() {
    return {
      message:'',
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
    justify-content: space-evenly

  .form-content
    padding: $s
    margin: $s50
    background-color: $white
    +breakpoint($tablet)
      padding: $s
    small
      opacity: 0.7

  .card
    margin: 0 0 $s
    padding: 0 0 $s
    border-bottom: 1px solid $neutral-04
    // box-shadow: 0 2px 5px 3px rgba($primary, 0.1)
    // padding: $s
    &:last-child
      border-bottom: none

  .control
    margin-bottom: $s
    &:last-child
      margin-bottom: 0
    label
      display: block
      margin: $s50 0 $s25
      .required::after
        content: "*"
        color: $accent
        margin: $s25
        font-weight: bold
    input, textarea
      width: 100%
      padding: $s*0.5 $s
  .drop-down
    display: flex
    justify-content: flex-end
    .width
      width: 250px
      margin: 10px
</style>
