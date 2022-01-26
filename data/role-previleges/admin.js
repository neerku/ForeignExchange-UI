
const admin = [
  {
    label: 'Queue',
    children: [
      {
        label: 'Actions',
        children: [
          {
            label: 'EPIC Scheduling',
            checked: true
          },
          {
            label: 'Send To Triage',
            checked: true
          },
          {
            label: 'Send To Exam',
            checked: true
          },
          {
            label: 'Discharge',
            checked: true
          },
          {
            label: 'Mark as No - Show',
            checked: true
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
            checked: true
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
            checked: true
          },
          {
            label: 'Completed',
            checked: true
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
            checked: true
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
            checked: true
          },
          {
            label:   'Add Insurance Notes',
            checked: true
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
            checked: true
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
            checked: true
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

export { admin }