<template lang="pug">
.container
  .container-body 
    <div v-text="transcript"></div>
</template>

<script>
export default {
  layout: 'landing',
  data() {
    return {
  }
}
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
