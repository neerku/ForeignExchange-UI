<template lang="pug">
  .date
    ui-button(:kind="['icon', dark ? 'dark' : '' ]", size="sm" @clicked="prev", :disable="disablePrev")
      i.nu.nu-angle-left
    span.current(:class="dark") {{ date }}
    ui-button(:kind="['icon', dark ? 'dark' : '']", size="sm" @clicked="next", :disable="disableNext")
      i.nu.nu-angle-right
    ui-button(v-if="showIcon", :kind="['icon', dark ? 'dark' : '']", @clicked="toggleCalendar")
      i.nu.nu-calendar
    overlay-panel(ref="calendar", :showCloseIcon="false", :dismissable="false", appendTo="body")
      calendar(v-model="d" :inline="true", :min-date="new Date(min)" :max-date="new Date(max)" @date-select="toggleCalendar")
</template>

<script>
import m from 'moment'
import {mapActions, mapGetters} from 'vuex'
// import visitUpdate from '~/queries/updateVisitSubscription.gql'


export default {
  props: {
    min: {
      type: String,
      default: null
    },
    max: {
      type: String,
      default: null
    },
    dark: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    },
    showOtherMonths: {
      type: Boolean,
      default: true
    },
  },
  data() {
    return {
      d: m().startOf('day').toISOString(),
      dCalendar: false
    }
  },
  computed: {
      ...mapGetters(['selectedLocation']),
    minDate() {
      return m(this.min).startOf('day')
    },
    maxDate() {
      return m(this.max).endOf('day')
    },
    diff() {
        const selectedDate =
          this.dCalendar ? m(this.d).utc(true).startOf('day').toISOString() : m(this.d).utc(true).toISOString()
      return m().utc(true).startOf('day').diff(selectedDate, 'days')
    },
    isToday() {
      return this.diff === 0
    },
    isTomorrow() {
      return this.diff === -1
    },
    date() {
      return this.isToday
        ? 'Today, ' + m(this.d).utc().format('ddd')
        : this.isTomorrow
          ? 'Tomorrow, ' + m(this.d).utc().format('ddd')
          : m(this.d).utc().format('DD MMM, ddd')
    },
    disablePrev() {
      return m(this.d).utc().startOf('day')
        .diff(m(this.minDate).utc().startOf('day'), 'days') <= 0
    },
    disableNext() {
      return m(this.d).utc().startOf('day')
        .diff(m(this.maxDate).utc().endOf('day'), 'days') >= 0
    }
  },
  methods: {
    ...mapActions(['onDateChanged','updateVisitQueueBySubscription']),
    prev(done) {
      this.dCalendar = false;
      this.d = m(this.d).subtract(1, 'day').toISOString()
      this.$emit('change', this.d)
      this.onDateChanged(this.d);
      done()
    },
    next(done) {
      this.dCalendar = false;
      this.d = m(this.d).add(1, 'day').toISOString()
      this.$emit('change', this.d)
      this.onDateChanged(this.d);
      done()
    },
    toggleCalendar(done, event) {
      if (event === undefined) {
        this.dCalendar = true;
        this.onDateChanged(this.d);
      }
      this.$refs.calendar.toggle(event)
      if (typeof done === 'function') done()
    }
  },
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.date
  +flex
  span.current
    display: inline-block
    padding: 0 $s25
    font-size: 0.8rem
    text-align: center
    width: 7rem
  button
    opacity: 0.9
    &:hover
      opacity: 1
</style>
