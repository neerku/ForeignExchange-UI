const age = {
  labels: [ '0-10', '10-20', '20-30', '30-40', '40-50', '50-60', '60-70', '70-80', '80-90', '90-100', ],
  series: [ 3, 7, 20, 32, 21, 15, 53, 27, 0, 2 ]
}

const sex = {
  labels: ['Female', 'Male', 'Other'],
  series: [25, 42, 8]
}

const paymentType = {
  labels: [ 'Insurance', 'Self Pay', 'Employee Authorized'],
  series: [ 11, 32, 27 ]
}

const relation = {
  labels: [ 'Self', 'Mother', 'Father', 'Spouse', 'Other' ],
  series: [ 21, 12, 15, 19, 5]
}

const medicare = {
  labels: [ 'Medicare', 'No-Medicare' ],
  series: [ 40, 30 ]
}

export { age, sex, paymentType, relation, medicare }