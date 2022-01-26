const metrics = [
  {
    from: 'Checkin',
    to: 'Registration',
    avg: '7h',
    min: '1h',
    max: '26h',
  },
  {
    from: 'Checkin',
    to: 'Here',
    avg: '12h',
    min: '3h',
    max: '24h',
  },
  {
    from: 'Registration',
    to: 'EPIC',
    avg: '3h',
    min: '1h',
    max: '6h',
  },
  {
    from: 'EPIC',
    to: 'Triage',
    avg: '3h',
    min: '1h',
    max: '6h',
  },
  {
    from: 'Triage',
    to: 'Exam',
    avg: '5m',
    min: '1m',
    max: '2m',
  },
  {
    from: 'Exam',
    to: 'Discharge',
    avg: '30m',
    min: '5m',
    max: '14m',
  },
]

export { metrics }