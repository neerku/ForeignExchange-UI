import _ from 'lodash'
import f from 'faker'
import { piedmont } from './locations'
import { roles } from './roles'

const locations = _(piedmont).flatMap('locations')
const multiRoleMap = {
  'Screener': [ 'Frontdesk' ],
  'Nurse': [ 'Provider', 'Discharger'],
  'Clinic Admin': ['Practice Manager']
}

const locationTree = _(locations).map((location) => {
  return {
    key: f.datatype.uuid(),
    label: location.name,
    children: roles.map((role) => {
      const users = []
      const count = f.datatype.number({ min: 2, max: 5 })
      const locationCount = f.datatype.number({ min: 1, max: 5 })
      const userLocations = [...Array(locationCount)].map(n => {
      const randomLoc = f.random.arrayElement(locations.value())
        return randomLoc
      })
      const hasAdditionalRole = f.datatype.boolean()

      for (let i = 0; i <= count; i++) {
        const locations = _(userLocations).map(l => ({ label: l.name, icon: 'location-filled'}))
          .uniq(l => l.name).value()
        users.push({
          key: f.datatype.uuid(),
          label: f.name.firstName() + ' ' + f.name.lastName(),
          type: 'user',
          icon: 'nu nu-person',
          location: location.name,
          assignments: locations.map(location => ({
            location,
            roles: hasAdditionalRole && multiRoleMap[role.label]
              ? [
                { label: role.label, icon: 'people' },
                { label: f.random.arrayElement(multiRoleMap[role.label]), icon: 'people'}
              ]
              : [{ label: role.label, icon: 'people' }]
          })),
          locations
        })
      }
      return {
        key: role.key,
        label: role.label,
        children: users,
        location: location.name,
        type: 'role',
        icon: 'nu nu-people',
      }
    }),
    type: 'location',
    icon: 'nu nu-location-filled',
  }
}).value()

export { locationTree }