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
      .split
      .split
      .split
</template>

<script>
export default {
  layout: 'login',
  data(){
    return {
      currencies:['US'],
      currency:null,
      currency2:null
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
    .split
      display: flex
      width: 47%
      border:1px solid red
      margin:15px
  .drop-down
    display: flex
    justify-content: flex-end
    .width
      width: 250px
      margin: 10px

</style>
