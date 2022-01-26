import f from 'faker'
import m from 'moment'
import _ from 'lodash'

const genVisit = (i) => {
  return {
    type: 'Walk-In',
    patient: {
      firstName: f.name.firstName(),
      lastName: f.name.lastName(),
      dob: m(f.date.past(50, new Date('1/1/2000')))
        .format('MM/DD/YYYY')
        .split('/'),
      reason: '12:00 COVID Test',
    },
    checks: {
      identity: i !== 3 && i !== 5,
      forms: i !== 5,
      insurance: i !== 5,
    },
    status: f.random.arrayElement(['check-in', 'epic', 'triage']),
    chat: i > 3,
    notification: i === 4,
    ready: i !== 5,
  }
}

const genConfig = () => {
  const config = []
  let startTime = m().startOf('day')

  while (startTime.diff(m().endOf('day')) < 0) {
    const endTime = m(startTime).add(59, 'minutes')
    config.push({
      id: f.datatype.uuid(),
      startTime: _.cloneDeep(startTime),
      startTimeFormatted: _.cloneDeep(startTime).format('hh:mm a'),
      endTime: _.cloneDeep(endTime),
      endTimeFormatted: _.cloneDeep(endTime).format('hh:mm a'),
      bookings: f.random.arrayElement([4, 6, 10, 12]),
      active: startTime.hours() >= 8 && startTime.hours() < 20
    })
    startTime = startTime.add(60, 'minutes')
  }

  return config
}


const genCalendar = (config) => {
  const calendar = []
  let i = 0
  if (config) {
    config.forEach((slot) => {
      let startTime = slot.startTime

      while (startTime.diff(slot.endTime) < 0) {
        const hasVisit = startTime.hours() > 8 && f.datatype.boolean()
        const isNow = (start, end) => {
          const now = m()
          const nextStart = m(`${now.month() + 1}/${now.date()}/${now.year()} ${start}`)
          const nextEnd = m(`${now.month() + 1}/${now.date()}/${now.year()} ${end}`)
          const isNow = now.diff(nextStart, 'minutes') > 0 && now.diff(nextEnd, 'minutes') < 0
          return isNow
        }
        const visit = hasVisit ? genVisit(i) : null
        const endTime = m(startTime)
          .add(60 / slot.bookings - 1, 'minutes')
          .format('hh:mm a')
        calendar.push({
          id: f.datatype.uuid(),
          slot: {
            start: startTime.format('hh:mm a'),
            end: endTime,
            isNow: isNow(startTime.format('hh:mm a'), endTime),
          },
          visit,
          active: slot.active,
        })
        startTime = startTime.add(60 / slot.bookings, 'minutes')
        i++
      }
    })
  }

  return calendar
}

const calendarConfig = genConfig()

export { calendarConfig, genCalendar }
