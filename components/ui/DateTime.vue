<template lang="pug">
  span.date-time
    span {{ datetime[0] }}
    span.separator /
    span {{ datetime[1] }}
    span.separator /
    span {{ datetime[2] }}
</template>

<script>
export default {
  props: {
    datetime: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="sass" scoped>
.date-time
  opacity: 0.8
  .separator
    opacity: 0.3
    padding: 0 2px
</style>