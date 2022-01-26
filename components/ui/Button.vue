<template lang="pug">
button.btn(:class="classify", :disabled="disable || working", @click.stop.prevent="onClick")
  span.content
    slot
    .loader(v-if="working")
</template>
<script>
export default {
  props: {
    kind: {
      type: [Array, String],
      default: () => [],
      validator(value) {
        const type = typeof value
        const allowed = [
          '',
          'link',
          'neutral',
          'primary',
          'danger',
          'light',
          'accent',
          'outline',
          'block',
          'dark',
          'icon'
        ]
        if (type === 'string') {
          return allowed.includes(value)
        } else {
          let valid = true
          value.forEach((kind) => {
            if (!allowed.includes(kind)) {
              valid = false
            }
          })
          return valid
        }
      }
    },
    size: {
      type: String,
      default: 'md',
      validator(value) {
        const allowed = ['sm', 'md', 'lg']
        return allowed.includes(value)
      }
    },
    disable: {
      type: Boolean,
      default: false
    },
    isFake: { type: Boolean, default: false }
  },
  data() {
    return {
      working: false
    }
  },
  computed: {
    classify() {
      const type = typeof this.kind
      const loading = this.working ? 'loading' : ''
      return type === 'string'
        ? [this.kind, this.size, loading]
        : [...this.kind, this.size, loading]
    }
  },
  methods: {
    onClick(evt) {
      if (this.disable || this.working) {
        return
      }
      if (!this.isFake) {
        evt.stopPropagation()
        evt.preventDefault()
        this.working = true
        this.$emit('clicked', this.doneWorking, evt)
      }
    },
    doneWorking() {
      this.working = false
    },
    startWorking() {
      this.working = true
      return this.doneWorking
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

/* stylelint-disable */

@mixin theme($color, $background: default, $border: transparent)
  color: $color
  background-color: $background
  border: 1px solid $border

@mixin button()
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
  span.content
    display: flex
    align-items: center
    justify-content: center
    padding: 0.35em 1em
    height: 100%
    white-space: nowrap
    > *
      color: inherit !important

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)


.btn
  +button
  +theme($neutral-10, transparent, transparent)
  opacity: 0.9

.btn .loader
  margin: 0
  margin-left: $s*0.5
  border: 0.15em solid #999
  border-top: 0.15em solid #666
  border-radius: 50%
  width: 0.8em
  height: 0.8em
  animation: spin 1s linear infinite

// Default
.btn
  &.outline
    +theme($neutral-10, transparent, $neutral-07)
  &:hover
    box-shadow: 0 0 0.3em 0.1em rgba($neutral-10, 0.2)
    opacity: 1
  span + .nu
      display: inline-block
      margin-left: 0.25em
  strong + .nu
      display: inline-block
      margin-left: 0.25em
  span
    font-size: inherit
    font-weight: inherit
  strong
    font-size: inherit
  .nu + span,
  .nu + strong
      display: inline-block
      margin-left: 0.25em

// Disabled
.btn
  &[disabled], &[disabled]:hover
    opacity: 0.3
    &.loading, &.loading:hover
      opacity: 1

// Colors
.btn
  // Link
  &.link
    +theme($accent, transparent, transparent)

  // Neutral
  &.neutral
    +theme($neutral-10, $neutral-01, transparent)
  &.neutral:hover
    box-shadow: 0 0 0.3em 0.1em rgba($neutral-10, 0.2)
  &.neutral.outline
    +theme($neutral-10, $neutral-01, $neutral-08)

  // Dark
  &.dark
    +theme($neutral-01, transparent, transparent)
  &.dark:hover
    box-shadow: 0 0 0.3em 0.1em rgba($neutral-10, 0.2)

  // Light
  &.light
    +theme($neutral-01, transparent, transparent)
  &.light:hover
    box-shadow: 0 0 0.3em 0.1em rgba($neutral-05, 0.2)
  &.light .loader
    border-color: $neutral-02 $neutral-06 $neutral-06
  &.light.outline
    +theme($neutral-01, transparent, $neutral-07)

  // Primary
  &.primary
    +theme($neutral-01, $primary, $primary)
  &.primary:hover
    box-shadow: 0 0 0.3em 0.1em rgba($primary, 0.2)
  &.primary .loader
    border-color: $neutral-03 $neutral-06 $neutral-06
  &.primary.outline
    +theme($primary, transparent, $primary)
  &.primary.outline .loader
    border-color: $primary rgba($primary, 0.6) rgba($primary, 0.6)

  // accent
  &.accent
    +theme($white, $accent, $accent)
  &.accent:hover
    box-shadow: 0 0 0.5em 0.2em rgba($accent, 0.4)
  &.accent.outline
    +theme($accent, transparent, $accent)
  &.accent.outline .loader
    border-color: $accent $neutral-06 $neutral-06

  // Danger
  // &.danger
  //   +theme($neutral-01, $status-error-bg, $status-error-bg)
  // &.danger:hover
  //   box-shadow: 0 0 0.3em 0.1em rgba($status-error-bg, 0.2)
  // &.danger .loader
  //   border-color: $neutral-03 $neutral-06 $neutral-06
  // &.danger.outline
  //   +theme($status-error-bg, transparent, $status-error-bg)
  // &.danger.outline:hover
  //   box-shadow: 0 0 0.3em 0.1em rgba($status-error-bg, 0.2)
  // &.danger.outline .loader
  //   border-color: $status-error-bg $neutral-06 $neutral-06

// Color Adjustments
// .btn
//   &.primary:not(.outline):hover
//     box-shadow: 0 0 0.3em 0.1em rgba($accent, 0.3)

// Sizes
.btn
  &.sm
    font-size: 0.8rem
    font-weight: 500
  &.md
    font-size: 1rem
    font-weight: 500
  &.lg
    font-size: 1.3rem
    font-weight: 600
    span.content
      // padding: 0.4em 1em

// Block
.btn
  &.block
    display: block
    width: 100%
    flex: 1

// Icon
.btn
  &.icon
    width: 2.5em
    height: 2.5em
    span.content
      align-items: center
      padding: 0.5em !important
    .fa, .nu
      font-size: 1em
      margin-right: 0
      transform: scale(1.4)
  &.icon.loading
    position: relative
    .fa, .nu
      visibility: hidden
    .loader
      margin-left: 0
      height: 0.8em
      width: 0.8em
      +absolute
</style>
