<template lang="pug">
.date-container
  .date
      input.mm(
      type='number',
      placeholder='MM',
      max="12"
      size="2"
      maxlength="1",
      ref="month",
      v-model="month"
      @keydown="handleKeyDown($event)"
      @input="change('month')"
      v-bind:class="{error : !validation}"
      :disabled="disabled"
      )
      span.separator /
      input.dd(
      type='number',
      placeholder='DD',
      max="31"
      size="2"
      maxlength="1",
      ref="date",
      v-model="date"
      v-bind:class="{error : !validation}"
      @keydown="handleKeyDown($event)"
      @input="change('date')"
      :disabled="disabled"
      )
      span.separator /
      input.yyyy(
      type='number',
      placeholder='YYYY',
      :max='yearMax'
      size="4"
      maxlength="1",
      ref="year",
      v-model="year"
      v-bind:class="{error : !validation}"
      @keydown="handleKeyDown($event)"
      @input="change('year')"
      :disabled="disabled"
      )
</template>

<script>
import m from 'moment'
export default {
  props: {
    value: {
      type: String,
      default: '',
    },
    focus: {
      type: Boolean,
      default: false,
    },
    updatedDate: {
      type: String,
      default: '',
    },
    validation: {
      type: Boolean,
      default: false,
    },
    field: {
      type: Object,
      default: null,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      digit: this.value || '',
      yearMax: m().format('YYYY'),
      date: this.field?.value ? m.utc(this.field?.value).format('DD') : null,
      year: this.field?.value ? m.utc(this.field?.value).format('YYYY') : null,
      month: this.field?.value ? m.utc(this.field?.value).format('MM') : null,
      fields: this.field,
      elementFocus: false,
    }
  },
  watch: {
    updatedDate(newValue, oldValue) {
      this.date = newValue ? m.utc(newValue).format('DD') : null
      this.year = newValue ? m.utc(newValue).format('YYYY') : null
      this.month = newValue ? m.utc(newValue).format('MM') : null
    },
  },
  mounted() {
    this.$forceUpdate()
    setTimeout(() => {
      this.date = this.field?.value
        ? m.utc(this.field.value).format('DD')
        : null
      this.year = this.field?.value
        ? m.utc(this.field.value).format('YYYY')
        : null
      this.month = this.field?.value
        ? m.utc(this.field.value).format('MM')
        : null
    })
  },
  methods: {
    change(box) {
      this.fields.valueSubmitted = false
      if (
        box === 'month' &&
        this.$refs.month.size === ('' + this.month).length
      ) {
        if (this.month > 12) {
          this.month = ''
        } else {
          this.$refs.date.focus()
          this.$refs.date.select()
        }
      }

      if (box === 'date' && this.$refs.date.size === ('' + this.date).length) {
        if (this.date > 31) {
          this.date = ''
        } else {
          this.$refs.year.focus()
          this.$refs.year.select()
        }
      }

      if (box === 'year' && this.$refs.year.size === ('' + this.year).length) {
        if (this.year >= 1900 && this.year <= m().format('YYYY')) {
          this.$refs.year.blur()
        } else {
          this.year = ''
        }
      }

      if (
        this.year &&
        this.month &&
        this.date &&
        m(
          this.month + '-' + this.date + '-' + this.year,
          'MM-DD-YYYY',
          true
        ).isValid() && m(this.month +'-'+ this.date  +'-'+ this.year, 'MM-DD-YYYY',true).isSameOrBefore(m())
      ) {
        this.fields.value = m
          .utc(
            this.month + '-' + this.date + '-' + this.year,
            'MM-DD-YYYY',
            true
          )
          .toISOString()
        this.fields.valueNew = this.fields.value
        this.$emit('date', {
          field: this.field,
          value: this.fields.value,
        })
        this.fields.valueSubmittedError = false
      } else {
        this.fields.value = null
        this.fields.valueUserEntered = 'Not valid'
        this.$emit('date', {
          field: this.field,
          value: this.fields.value,
        })
      }
    },
    isNumeric(charCode) {
      // numeric + numpad keys
      return (
        (charCode >= 48 && charCode <= 57) ||
        (charCode >= 96 && charCode <= 105)
      )
    },
    handleInput() {
      if (this.digit.length > 1) {
        this.digit = this.digit.slice(0, 1)
      }
      return this.$emit('on-input', this.digit)
    },
    handleKeyDown(e) {
      const event = e || window.event
      const keyCode = event.which ? event.which : event.keyCode
      // 0-9, DEL(46), Backspace(8), Paste, ArrowLeft
      if (this.isNumeric(keyCode) || [8, 9, 37, 39, 46, 86].includes(keyCode)) {
        this.$emit('on-keydown', event)
      } else {
        event.preventDefault()
      }
    },
    handlePaste(event) {
      return this.$emit('on-paste', event)
    },
    handleFocus() {
      this.$refs.digit.select()
      return this.$emit('on-focus')
    },
    handleBlur() {
      return this.$emit('on-blur')
    },
  },
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
    font-size: 1rem
    width: 100%
    appearance: none
    border: 1px solid $input-border
    outline: none
    text-align: center
    padding: $s
    font-weight: 500
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

.date
    +flex
    .separator
      display: inline-block
      padding: 0 $s*0.25
      opacity: 0.3
    input
      width: 4.3rem
      &.yyyy
        width: 5rem

.date-container
  display: block

.date-container.error
    border: none
    input
      border-radius: 3px
      border-color:$accent
.errortext
  color:$accent
</style>
