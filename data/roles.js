import f from 'faker'

const roles = [
  {
    key: f.datatype.uuid(),
    label: 'Screener',
  },
  {
    key: f.datatype.uuid(),
    label: 'Frontdesk',
  },
  {
    key: f.datatype.uuid(),
    label: 'Nurse',
  },
  {
    key: f.datatype.uuid(),
    label: 'Provider',
  },
  {
    key: f.datatype.uuid(),
    label: 'Discharger',
  },
  {
    key: f.datatype.uuid(),
    label: 'Practice Manager',
  },
  {
    key: f.datatype.uuid(),
    label: 'Clinic Admin',
  },
]

export { roles }