<template lang="pug">
  .otp
    ui-otp-digit(
      v-for="d, i in size",
      :key="i",
      :focus="active === i",
      :value="digits[i]",
      @on-input="handleInput",
      @on-keydown="handleKeyDown",
      @on-focus="handleFocus(i)",
      @on-blur="handleBlur",
      @on-paste="handlePaste"
    )
</template>

<script>
export default {
  props: {
    size: {
      type: Number,
      default: 6,
    },
  },
  data() {
    return {
      active: 0,
      digits: [],
      tmpDigits: [],
    }
  },
  methods: {
    focus(input) {
      this.active = Math.max(Math.min(this.size - 1, input), 0);
    },
    reset() {
      if (this.digits.length > 0) this.$emit('otp', '')
      this.digits = [];
      this.active = 0;
    },
    updateDigits() {
      if (this.digits.join('').length === this.size) {
        return this.$emit('otp', this.digits.join(''));
      }
    },
    updateFocused(digit) {
      this.tmpDigits = Object.assign([], this.otp);
      this.$set(this.digits, this.active, digit);
      if (this.tmpDigits.join('') !== this.digits.join('')) {
        this.$emit('otp', this.digits.join(''));
        this.updateDigits();
      }
    },
    focusNext() {
      this.focus(this.active + 1);
    },
    focusPrev() {
      this.focus(this.active - 1);
    },
    handleFocus(i) {
      this.active = i;
    },
    handleBlur() {
      this.active = -1;
    },
    handleInput(digit) {
      this.updateFocused(digit);
      this.focusNext();
    },
    handleKeyDown(e) {
      switch (e.key) {
        case 'Backspace':
          e.preventDefault();
          this.updateFocused('');
          this.focusPrev();
          break;
        case 'Delete':
          e.preventDefault();
          this.updateFocused('');
          break;
        case 'ArrowLeft':
          e.preventDefault();
          this.focusPrev();
          break;
        case 'ArrowRight':
          e.preventDefault();
          this.focusNext();
          break;
        default:
          break;
      }
    },
    handlePaste(event) {
      event.preventDefault();
      const pastedData = event.clipboardData
          .getData('text/plain')
          .slice(0, this.size - this.active)
          .split('')
      if (pastedData.join('').match(/^\d+$/)) {
        const digitsLength = this.digits.slice(0, this.active)
        const concatDigits = digitsLength.concat(pastedData)
        this.$set(this, 'digits', concatDigits.slice(0, this.size))
        this.focus(concatDigits.slice(0, this.size).length)
        return this.updateDigits()
      }
    },
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.otp
  +flex
</style>
