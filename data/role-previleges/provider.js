
const provider = [
  {
    label: 'Queue',
    children: [
      {
        label: 'Actions',
        children: [
          {
            label: 'EPIC Scheduling',
            checked: false
          },
          {
            label: 'Send To Triage',
            checked: true
          },
          {
            label: 'Send To Exam',
            checked: false
          },
          {
            label: 'Discharge',
            checked: true
          },
          {
            label: 'Mark as No - Show',
            checked: false
          },
          {
            label: 'Cancel Visit',
            checked: true
          }
        ]
      },
      {
        label: 'Tabs',
        children: [
          {
            label: 'All Visits',
            checked: false
          },
          {
            label: 'EPIC Scheduling',
            checked: true
          },
          {
            label: 'Nurse',
            checked: true
          },
          {
            label: 'Being Discharged',
            checked: false
          },
          {
            label: 'Completed',
            checked: false
          },
        ]
      }
    ]
  },
  {
    label: 'Patient',
    children: [
      {
        label: 'Visit',
        children: [
          {
            label: 'Checkin',
            checked: true
          },
          {
            label: 'View Visit',
            checked: true
          },
          {
            label: 'Add Visit Notes',
            checked: false
          }
        ],
      },
      {
        label: 'Insurance',
        children: [
          {
            label:   'View Insurance',
            checked: true
          },
          {
            label:   'Edit Insurance',
            checked: false
          },
          {
            label:   'Add Insurance Notes',
            checked: false
          }
        ],
      },
      {
        label: 'Documents',
        children: [
          {
            label:   'View Documents',
            checked: true
          },
          {
            label:   'Upload Documents',
            checked: true
          },
          {
            label:   'Download Documents',
            checked: true
          },
        ],
      },
      {
        label: 'Profile',
        children: [
          {
            label:   'View Profile',
            checked: false
          },
          {
            label:   'Copy Profile',
            checked: true
          },
          {
            label:   'Edit Profile',
            checked: true
          }
        ],
      },
      {
        label: 'SMS',
        children: [
          {
            label:   'View SMS'
          },
          {
           label: 'Send SMS'
          }
        ]
      }
    ]
  },
  {
    label: 'Admin',
    children: [
      {
        label: 'Reports',
        children: [
          {
            label: 'View Reports',
            checked: true
          }
        ]
      },
      {
        label: 'Clinic Admin',
        children: [
          {
            label: 'View',
            checked: false
          },
          {
            label: 'Edit Day Planner',
            checked: true
          },
          {
            label: 'Edit Week Planner',
            checked: true
          }
        ]
      }
    ]
  }
]

export { provider }