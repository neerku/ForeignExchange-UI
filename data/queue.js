import _ from 'lodash'
import f from 'faker'
import m from 'moment'

const actionLabels = {
  schedule: {
    label: 'Start Scheduling',
    kind: ['primary', 'outline']
  },
  ready: {
    label: 'Mark as Ready',
    kind: ['primary', 'outline']
  },
  triage: {
    label: 'Ready for Triage',
    kind: 'primary'
  },
  care: {
    label: 'Ready for Exam',
    kind: 'primary'
  },
  discharge: {
    label: 'Ready for Discharge',
    kind: 'primary'
  },
  complete: {
    label: 'Discharge Patient',
    kind: 'primary'
  },
}

const steps = {
  frontdesk: 'EPIC Scheduling',
  nurse: 'In Triage',
  provider: 'In Exam',
  discharge: 'Being Discharged',
}


const genQueue = ({ label, count }) => {
  const queue = []
  let minute = 10

  for (let i = 0; i < count; i++) {
    const slot = m().add(minute, 'minutes')
    const diffTime = slot - m()
    const duration = m.duration(diffTime, 'milliseconds')
    const remainder = 10 - (slot.minute() % 10)
    const actions = {
      triage: label === steps.frontdesk && i < count / 3,
      ready: label === steps.frontdesk && i >= count / 3 && i < (count * 2) / 3,
      schedule: label === steps.frontdesk && i >= (count * 2) / 3,
      care: label === steps.nurse,
      discharge: label === steps.provider,
      complete: label === steps.discharge,
    }
    const epicStatus = {
      success: label === steps.frontdesk && i < count / 3 || label !== steps.frontdesk,
      warn: label === steps.frontdesk && i >= count / 3 && i < (count * 2) / 3
    }
    const picked = i < count * 2 / 3 && label === steps.frontdesk
    const me = i < count * 2 / 3 && f.datatype.boolean() && label === steps.frontdesk
    const visitCode = f.datatype.uuid().split('-').join('').substr(1, 6).toUpperCase()
    queue.push({
      id: f.datatype.uuid(),
      visitCode,
      iAmHere: label === steps.frontdesk && i < count / 3 - 2,
      wait: duration,
      slot: {
        start: m(slot).add(remainder, 'minutes').format('hh:mm a'),
        end: m(slot)
        .add(remainder + 10, 'minutes')
        .format('hh:mm a'),
      },
      type: 'Walk-In',
      patient: {
        visitCode,
        firstName: f.name.firstName(),
        lastName: f.name.lastName(),
        dob: m(f.date.past(50, new Date('1/1/2000')))
          .format('MM/DD/YYYY')
          .split('/'),
        reason: '12:00 COVID Test',
      },
      checks: {
        identity:
          (epicStatus.warn && f.datatype.boolean()) ||
          epicStatus.success ||
          label !== steps.frontdesk,
        forms:
          (epicStatus.warn && f.datatype.boolean()) ||
          epicStatus.success ||
          label !== steps.frontdesk,
        insurance:
          (epicStatus.warn && f.datatype.boolean()) ||
          epicStatus.success ||
          label !== steps.frontdesk,
      },
      epicStatus,
      notification: i === 4,
      chat: i > 3,
      ready: i !== 5,
      actions: _.keys(_.pickBy(actions)).map((action) => actionLabels[action]),
      pickedBy: me ? 'Emma Reed' : picked ? f.name.findName() : null,
      me,
    })
    minute = minute + f.datatype.number({ min: 10, max: 15 })
  }

  return queue
}


export { genQueue }
