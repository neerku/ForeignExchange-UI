<template lang="pug">
    .container(v-if="!loading")
      h4(slot="header") {{ facilityName }}
      .days.sm(v-if="weekSchedule || saturdaySchedule || sundaySchedule")
        span(v-if="weekSchedule")
          h3 Monday - Friday
            .control
              label
                small From
              .input.time
                dropdown.sm(:options="hours", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="weekSchedule.start.h" disabled)
                span.separator :
                dropdown.sm(:options="minutes", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="weekSchedule.start.m" disabled)
                span.separator &nbsp;
                dropdown.a.sm(:options="timeOptions", optionLabel="label", optionValue="value", appendTo="body", value="am" v-model="weekSchedule.start.a" disabled)
            .control
              label
                small To
              .input.time
                dropdown.sm(:options="hours", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="weekSchedule.end.h" disabled)
                span.separator :
                dropdown.sm(:options="minutes", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="weekSchedule.end.m" disabled)
                span.separator &nbsp;
                dropdown.a.sm(:options="timeOptions", optionLabel="label", optionValue="value", appendTo="body", value="am" v-model="weekSchedule.end.a" disabled)

        span(v-if="saturdaySchedule")
          h3 Saturday
            .control
              label
                small From
              .input.time
                dropdown.sm(:options="hours", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="saturdaySchedule.start.h" disabled)
                span.separator :
                dropdown.sm(:options="minutes", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="saturdaySchedule.start.m" disabled)
                span.separator &nbsp;
                dropdown.a.sm(:options="timeOptions", optionLabel="label", optionValue="value", appendTo="body", value="am" v-model="saturdaySchedule.start.a" disabled)
            .control
              label
                small To
              .input.time
                dropdown.sm(:options="hours", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="saturdaySchedule.end.h" disabled)
                span.separator :
                dropdown.sm(:options="minutes", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="saturdaySchedule.end.m" disabled)
                span.separator &nbsp;
                dropdown.a.sm(:options="timeOptions", optionLabel="label", optionValue="value", appendTo="body", value="am" v-model="saturdaySchedule.end.a" disabled)

        span(v-if="sundaySchedule")
          h3 Sunday
            .control
              label
                small From
              .input.time
                dropdown.sm(:options="hours", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="sundaySchedule.start.h", disabled)
                span.separator :
                dropdown.sm(:options="minutes", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="sundaySchedule.start.m" disabled)
                span.separator &nbsp;
                dropdown.a.sm(:options="timeOptions", optionLabel="label", optionValue="value", appendTo="body", value="am" v-model="sundaySchedule.start.a" disabled)
            .control
              label
                small To
              .input.time
                dropdown.sm(:options="hours", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="sundaySchedule.end.h" disabled)
                span.separator :
                dropdown.sm(:options="minutes", optionLabel="label", optionValue="value", appendTo="body", value="" v-model="sundaySchedule.end.m" disabled)
                span.separator &nbsp;
                dropdown.a.sm(:options="timeOptions", optionLabel="label", optionValue="value", appendTo="body", value="am" v-model="sundaySchedule.end.a" disabled)
      .days.sm(v-else)
        h4 Sorry, we couldn't find the center work schedule. Please contact the administrator.
    .loading(v-else)
      progress-spinner
</template>

<script>
import _, {isEmpty} from "lodash";
import {mapGetters} from "vuex";

export default {
  props: {
    schedule: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      hours: [],
      minutes: [],
      loading: true,
      facilityName: "",
      timeOptions: [
        { label: 'AM', value: 'am' },
        { label: 'PM', value: 'pm' }
      ],
      weekSchedule: {
        start: {
          h: '',
          m: '',
          a: ''
        },
        end: {
          h: '',
          m: '',
          a: ''
        }
      },
      saturdaySchedule: {
        start: {
          h: '',
          m: '',
          a: ''
        },
        end: {
          h: '',
          m: '',
          a: ''
        }
      },
      sundaySchedule: {
        start: {
          h: '',
          m: '',
          a: ''
        },
        end: {
          h: '',
          m: '',
          a: ''
        }
      },
      time: {
        start: {
          h: '',
          m: '',
          a: ''
        },
        end: {
          h: '',
          m: '',
          a: ''
        }
      },
    }
  },
  computed: {
    ...mapGetters(['locations', 'selectedLocation'])
  },
  watch: {
    selectedLocation() {
      this.loading = true;
      this.buildWorkSchedule()
    }
  },
  created () {
    for(let i = 1; i <= 12; i++) {
      this.hours.push({ label: _.padStart(i, 2, '0'), value: i })
    }
    for(let i = 0; i <= 59; i++) {
      this.minutes.push({ label: _.padStart(i, 2, '0'), value: i })
    }

    if (this.locations) { this.buildWorkSchedule() }
  },
  mounted() {
    this.buildWorkSchedule()
  },
  methods: {
    buildWorkSchedule() {
      if(this.locations && this.locations.length>0){
      let selectedCenter = null;
      this.locations.forEach((location) => {
        if (location._id === this.selectedLocation) {
          selectedCenter = location
        }
      })
      if (selectedCenter && selectedCenter.workSchedule.length > 0) {
        this.facilityName = selectedCenter.facilityName;
        const workSchedule = selectedCenter.workSchedule
        this.weekSchedule = this.parseSchedule(workSchedule
          .filter(x=>x.workingDaysOfWeek.includes('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'))[0]);
        this.saturdaySchedule = this.parseSchedule(workSchedule
          .filter(x=>x.workingDaysOfWeek.includes('Saturday'))[0]);
        this.sundaySchedule = this.parseSchedule(workSchedule
          .filter(x=>x.workingDaysOfWeek.includes('Sunday'))[0]);
      }
      this.loading = false;
      }
    },
    parseSchedule(schedule) {
      const timeSched = _.cloneDeep(this.time);
      if (!isEmpty(schedule)) {
        const start = schedule.openingTime.split(":");
        let hour = parseInt(start[0]);
        timeSched.start.h = hour > 12 ? hour - 12 : hour;
        timeSched.start.m = parseInt(start[1]);
        timeSched.start.a = hour > 12 ? "pm" : "am";

        const end = schedule.closingTime.split(":");
        hour = parseInt(end[0]);
        timeSched.end.h = hour > 12 ? hour - 12 : hour;
        timeSched.end.m = parseInt(end[1]);
        timeSched.end.a = hour > 12 ? "pm" : "am";
        return timeSched
      }
      return null
    }
  }
}
</script>

<style lang="sass" scoped>
@import '~/assets/style/config'
@import '~/assets/style/mixins'

.days
  margin-top: $s
  .control
    margin-top: $s125
  h4
    color: $accent
  label
    opacity: 0.7
.time
  +flex
  .p-dropdown
    width: 5rem
  .p-dropdown.a
    width: 6rem
  .separator
    display: inline-block
    padding: 0 $s25
.loading
  height: 100%
  +flex(center, center)
</style>
