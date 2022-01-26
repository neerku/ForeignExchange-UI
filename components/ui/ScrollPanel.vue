<template lang="pug">
.panel
  header.panel-header
    slot(name="header")
  main.panel-content(ref="content", :class="{ 'scroll': scroll }")
    slot
  footer.panel-footer
    slot(name="footer")
</template>

<script>
export default {
  props: {
    scroll: { type: Boolean, default: true },
    top: { type: Boolean, default: false },
    bottom: { type: Boolean, default: false },
    scrollToEl: { type: String, default: null },
    retryScroll: { type: Boolean, default: false },
  },
  data() {
    return {
      scrolledOnce: false,
      retries: 0
    }
  },
  watch: {
    top() {
      if (this.top) this.defaultScroll()
    },
    bottom() {
      if (this.bottom) this.defaultScroll()
    },
    scrollToEl() {
      if (this.scrollToEl) { this.defaultScroll() }
    },
  },
  mounted() {
    this.defaultScroll()
  },
  methods: {
    defaultScroll() {
      this.retries = 0
      this.scrolledOnce = false
      if (this.bottom) {
        this.scrollTo(2000)
      } else if (this.top) {
        this.scrollTo(0)
      } else if (this.scrollToEl) {
        this.scrollTo(this.scrollToEl)
      }
    },
    scrollTo(ref) {
      const content = this.$refs.content
      if (typeof ref === 'string') {
        this.scrollToId(ref)
      } else {
        content.scrollTop = ref
      }
    },
    scrollToId(id) {
      if (id) {
        const el = document.getElementById(id)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
          this.scrolledOnce = true
        } else if (this.retryScroll && !this.scrolledOnce && this.retries < 3) {
          this.retries = this.retries + 1
          setTimeout(() => { this.scrollToId(id) }, 300 * this.retries)
        }
      }
    },
    getCoords(elem) {
      const box = this.$refs.content.getBoundingClientRect()

      const body = document.body
      const docEl = document.documentElement

      const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
      const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

      const clientTop = docEl.clientTop || body.clientTop || 0
      const clientLeft = docEl.clientLeft || body.clientLeft || 0

      const top  = box.top +  scrollTop - clientTop
      const left = box.left + scrollLeft - clientLeft

      return { top: Math.round(top), left: Math.round(left) }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.panel
  height: 100%
  width: 100%
  flex: 1
  display: flex
  flex-direction: column
  overflow: hidden
  align-items: stretch
  > header.panel-header,
  > footer.panel-footer
    margin: 0 !important
    padding: 0 !important
  > main.panel-content
    flex: 1
    overflow: hidden
    display: flex
    flex-direction: column
    &.scroll
      overflow-y: auto
      scroll-behavior: smooth
      scrollbar-color: transparent transparent
      scrollbar-width: thin

  ::-webkit-scrollbar
    content: ""
    background: $neutral-02
    width: 10px
  ::-webkit-scrollbar-track
    background-color: $neutral-02
  ::-webkit-scrollbar-thumb
    background-color: rgba($neutral-04, 0.9)
    border: 1px solid $neutral-04
    min-height: 30px
    border-radius: 2px
  ::-webkit-scrollbar-thumb:hover
    background-color: rgba($neutral-06, 0.9)
    border: 1px solid $neutral-06
</style>
