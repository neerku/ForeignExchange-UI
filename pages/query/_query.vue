<template lang="pug">
.container
  .container-body 
    <div>
        <p>Welcome to VoiceMongo</p>
        <p>Message is: {{ transcript }}</p>
        <input v-model="transcript" placeholder="edit me" />
        <button :class="`mic`" @click="ToggleMic">Record</button>
    </div>
    <div>
        <p>Query Explanation</p>
        <p>Message is: {{ chatGPTResult }}</p>
    </div>
</template>

<script>
const Recognition = window.SpeechRecognition || window.webkitSpeechRecognition
const sr = new Recognition()
const { Configuration, OpenAIApi } = require('openai')

export default {
  layout: 'landing',
  data() {
    return {
      transcript: '',
      chatGPTResult: '',
      isRecording: false,
      chatGPTApiKey: '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',

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
      this.getGPTResult(t)
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

    async getGPTResult(transcript) {
      const configuration = new Configuration({
        apiKey: this.chatGPTApiKey,
      })
      const text= `Create a Mongo request to ${transcript}`
      const openai = new OpenAIApi(configuration)
      const response = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt:text,
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
      debugger
      if(response.status===200){
      this.chatGPTResult= response.data.choices[0].text}
      else
      this.chatGPTResult='Unable to get explanation'
      debugger
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
   
</style>
