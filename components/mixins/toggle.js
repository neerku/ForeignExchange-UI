export default {
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true
      this.$emit('open')
    },
    close(cb) {
      this.isOpen = false
      this.$emit('close')
      if (cb) cb()
    },
    show() {
      this.open()
    },
    hide() {
      this.close()
    },
    toggle() {
      this.isOpen = !this.isOpen
    }
  }
}
