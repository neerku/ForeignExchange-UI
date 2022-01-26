import _ from 'lodash'
import m from 'moment'

const calculateHourlySlotsQueue = (param) => {
  const payload=_.cloneDeep(param)
    const slotList=_.cloneDeep(payload.slotList)
    const isCurrentHour = payload.isCurrentHour
    const isTodayCenterSlotUsed = payload.isTodayCenterSlotUsed
    const centerSlots=payload.centerSlots
    const centerSlotsForTomorrow=payload.centerSlotsForTomorrow
    const currenttime = m()
    for (let i = 0; i < slotList.length; i++) {
      if (slotList[i].isSlotQueueSelectionEnabled) {
        let centerSlotHour
        if (isTodayCenterSlotUsed) {
          centerSlotHour = centerSlots.slots.filter(
            (x) => x.startTimeInMins === slotList[i].startTimeInMins
          )[0]
        } else {
          centerSlotHour = centerSlotsForTomorrow.slots.filter(
            (x) => x.startTimeInMins === slotList[i].startTimeInMins
          )[0]
        }
        const perSlotTime = 60 / centerSlotHour.totalSlots
        const startTime = m()
          .startOf('day')
          .add(centerSlotHour.startTimeInMins, 'minutes')
        let hourlySlotList = []
        for (let j = 0; j < centerSlotHour.totalSlots; j++) {
          let isSlotAlreadyUsed = false
          if (slotList[i].usedSlots) {
            const slotAlreadyUsed = slotList[i].usedSlots.filter(
              (x) => x === j + 1
            )
            if (slotAlreadyUsed.length > 0) isSlotAlreadyUsed = true
          }
          // if (!isSlotAlreadyUsed) {
            const perSlot = {
              slotStartTime: m(startTime)
                .add(j * perSlotTime, 'minutes')
                .format('hh:mm a'),
              slotEndTime: m(startTime)
                .add((j + 1) * perSlotTime, 'minutes')
                .format('hh:mm a'),
              label: `${m(startTime)
                .add(j * perSlotTime, 'minutes')
                .format('hh:mm')}`,
              queue: j + 1,
              open: true,
              selected: true,
              isNow:m(startTime).add((j) * perSlotTime, 'minutes').isAfter(currenttime),
              isSlotAlreadyUsed
            }
            hourlySlotList.push(perSlot)
          // }
        }
        if (isCurrentHour) {
          const index = hourlySlotList.findIndex((x) => x.isNow === true)
          const arrayLength = hourlySlotList.length
          hourlySlotList = hourlySlotList.slice(index , arrayLength)
          hourlySlotList = hourlySlotList.filter(x=> !x.isSlotAlreadyUsed)
        }
        slotList[i].slotDuringHourList = hourlySlotList
      } else continue
    }
   return slotList
}

const calculateHourlySlotsQueueForNurseVisit = (param) => {
  const payload=_.cloneDeep(param)
    const slotList=_.cloneDeep(payload.slotList)
    const isCurrentHour = payload.isCurrentHour
    const isTodayCenterSlotUsed = payload.isTodayCenterSlotUsed
    const centerSlots=payload.centerSlots
    const centerSlotsForTomorrow=payload.centerSlotsForTomorrow
    const currenttime = m()
    for (let i = 0; i < slotList.length; i++) {
      if (slotList[i].isSlotQueueSelectionEnabled) {
        let centerSlotHour
        if (isTodayCenterSlotUsed) {
          centerSlotHour = centerSlots.slots.filter(
            (x) => x.startTimeInMins === slotList[i].startTimeInMins
          )[0]
        } else {
          centerSlotHour = centerSlotsForTomorrow.slots.filter(
            (x) => x.startTimeInMins === slotList[i].startTimeInMins
          )[0]
        }
        const perSlotTime = 60 / centerSlotHour.totalSlots
        const startTime = m()
          .startOf('day')
          .add(centerSlotHour.startTimeInMins, 'minutes')
        let hourlySlotList = []
        for (let j = 0; j < centerSlotHour.totalSlots; j++) {
            const perSlot = {
              slotStartTime: m(startTime)
                .add(j * perSlotTime, 'minutes')
                .format('hh:mm a'),
              slotEndTime: m(startTime)
                .add((j + 1) * perSlotTime, 'minutes')
                .format('hh:mm a'),
              label: `${m(startTime)
                .add(j * perSlotTime, 'minutes')
                .format('hh:mm')}`,
              queue: j + 1,
              open: true,
              selected: true,
              isNow:m(startTime).add((j) * perSlotTime, 'minutes').isAfter(currenttime)
            }
            hourlySlotList.push(perSlot)
          
        }
        if (isCurrentHour) {
          const index = hourlySlotList.findIndex((x) => x.isNow === true)
          const arrayLength = hourlySlotList.length
          hourlySlotList = hourlySlotList.slice(index , arrayLength)
        }
        slotList[i].slotDuringHourList = hourlySlotList
      } else continue
    }
   return slotList
}
const minutesToHour= (min)=> {
  let hour = Math.floor(min / 60)
  const minutes = pad(min % 60)
  const hourFomat = hour >= 12 ? 'PM' : 'AM'
  hour = hour > 12 ? hour - 12 : hour
  return `${hour}:${minutes} ${hourFomat}`
}

const pad=(n)=> {
  return _.padStart(n, 2, '0')
}

export { calculateHourlySlotsQueue ,calculateHourlySlotsQueueForNurseVisit,minutesToHour}
