<template lang="pug">
  input(
    id="digit",
    ref="digit",
    type="number",
    min="0",
    max="9",
    size="1",
    v-model="digit",
    pattern="[0-9]"
    maxlength="1",
    @input="handleInput"
    @keydown="handleKeyDown"
    @paste="handlePaste"
    @focus="handleFocus"
    @blur="handleBlur"
  )
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    focus: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      digit: this.value || '',
    };
  },
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue) {
        this.digit = newValue;
      }
    },
    focus(newFocusValue, oldFocusValue) {
      if (oldFocusValue !== newFocusValue && (this.$refs.digit && this.focus)) {
        this.$refs.digit.focus();
        this.$refs.digit.select();
      }
    },
  },
  mounted() {
    if (this.$refs.digit && this.focus) {
      this.$refs.digit.focus()
      this.$refs.digit.select()
    }
  },
  methods: {
    isNumeric(charCode) {
      // numeric + numpad keys
      return (charCode >= 48 && charCode <= 57) || (charCode >= 96 && charCode <= 105);
    },
    handleInput() {
      if (this.digit.length > 1) {
        for (let i = 0; i < this.digit.length; i++) {
          this.$emit('on-input', this.digit[i]);
        }
        return
      }
      return this.$emit('on-input', this.digit);
    },
    handleKeyDown(e) {
      const event = (e) || window.event;
      const keyCode = (event.which) ? event.which : event.keyCode;
      // 0-9, DEL(46), Backspace(8), Paste, ArrowLeft
      if (this.isNumeric(keyCode) || [8, 37, 39, 46, 86].includes(keyCode)) {
        this.$emit('on-keydown', event);
      } else {
        event.preventDefault();
      }
    },
    handlePaste(event) {
      return this.$emit('on-paste', event);
    },
    handleFocus() {
      this.$refs.digit.select();
      return this.$emit('on-focus');
    },
    handleBlur() {
      return this.$emit('on-blur');
    },
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

$input-border: #ced4da
$input-border-focus: $primary
$input-box-shadow-focus: 0 0 0 0.2rem rgba($primary, 0.3)

input[type="number"]
  margin: 0
  margin-right: $s
  max-width: 4rem
  font-size: 1.5rem
  width: 100%
  appearance: none
  border: 1px solid $input-border
  outline: none
  text-align: center
  font-weight: bold
  padding: $s
  border-radius: 3px
  transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button
    -moz-appearance: textfield
    -webkit-appearance: none
    -ms-progress-appearance: none
  &:hover
    border-color: $input-border-focus
  &:focus
    border-color: $input-border-focus
    box-shadow: $input-box-shadow-focus
</style>
