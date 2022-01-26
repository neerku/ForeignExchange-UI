// import m from 'moment'
// import f from 'faker'

const m = require('moment')
const f = require('faker')

const startTime = m().endOf('day').add(1, 'minute')
const days = m.weekdaysShort()
const diff = 1
let i = 0
const heatmap = []
let timer = startTime

while (m().startOf('day').diff(timer, 'hours') <= 0) {

  const data = days.map(day => {
    const y = i > (24 / diff) * 0.75
      ? f.datatype.number({ min: 0, max: 1 })
      : i > (24 / diff) * 0.25
        ? f.datatype.number({ min: 2, max: 20 })
        : f.datatype.number({ min: 0, max: 3 })
    return { x: day, y }
  })

  heatmap.push({ name: timer.format('hha'), data })

  i++
  timer = timer.subtract(diff, 'hours')
}

export default heatmap
