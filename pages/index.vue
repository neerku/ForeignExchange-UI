<template lang="pug">
.container
  .container-body
    .form-content
      .card
        .control
          label 
              span Enter your Mongo Connection String
              span.red *
          .input
            <input-text v-model='mongoConnectionString'>
            </input-text>
            <button @click="validateConnection">Validate</button>
          label(v-if='connectionSuccess')
              i.nu.nu-globe
        
        //- <div v-text="transcript"></div>
</template>
<script>

export default {
  layout: 'landing',
  data() {
    return {
      mongoConnectionString:'',
      connectionSuccess:false,
      message:'',
    }
  },
  methods: {

    validateConnection(){
      console.log(this.mongoConnectionString)
      this.connectionSuccess=!this.connectionSuccess
      this.mongoConnectionString=''
      this.navigate()
    },

    navigate() {
      this.$router.push({
        path: `/query/abc`,
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
    .btn
      appearance: none
      text-decoration: none
      border-radius: 3px
      cursor: pointer
      outline: none
      transition: .2s ease
      font-size: 1rem
      line-height: 1em
      font-weight: 600
      height: 2.5em
      padding: 0
  .drop-down
    display: flex
    justify-content: flex-end
    .width
      width: 250px
      margin: 10px
</style>
