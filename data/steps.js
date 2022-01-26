const steps = {
  _id: '3b490cec-9b04-4a14-9a59-c0ac3f232222',
  formTemplateName: 'Patient Registration template',
  formType: {
    _id: '6f7101ec-81bc-44ae-9f8a-2b72fa8e462a',
    type: 'patientRegistration',
  },
  pages: [
    {
      pageId: 1,
      pageName: 'Patient Details',
      stepName: 'patientDetails',
      section: [
        {
          questions: [
            {
              label: 'Patient Photo ID',
              help: "Photo ID is required. Valid photo ID are Social Security Card, State-issued Driver's license/ID card, Passport, U.S. miitary or military dependent ID",
              hint: 'Check help for any queries on photo ID',
              fieldGroups: [
                {
                  field: {
                    _id: 'e7de8285-f532-4ae6-acc5-94162215cefc',
                    fieldId: 'photoId',
                    label: 'Photo ID',
                    answerType: {
                      _id: 'd5c8dc90-5fc2-49e3-9c76-4b6f3b2ea13e',
                      answerType: 'scan',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                    errorMessage:"Photo Id is Required, Please Upload or scan your Photo ID"
                  },
                  apiModelRef: ['photoIdUri'],
                },
              ],
            },
            {
              label: 'Patient Name',
              fieldGroups: [
                {
                  field: {
                    _id: '8cfecb4c-dc0d-4461-b264-33c94361c2ad',
                    fieldId: 'firstName',
                    label: 'First Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  display:{
                    flex:100
                  },
                  apiModelRef: ['patientInfo', 'firstName'],
                },
                {
                  field: {
                    _id: '084532e2-9056-4320-9bac-7a76b1db72ff',
                    fieldId: 'lastName',
                    label: 'Last Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  display:{
                    flex:50
                  },
                  apiModelRef: ['patientInfo', 'lastName'],
                },
                {
                  field: {
                    _id: '705e0c39-b66c-466e-9b25-86ec27368de9',
                    fieldId: 'middleName',
                    label: 'Middle Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  display:{
                    flex:50
                  },
                  apiModelRef: ['patientInfo', 'middleName'],
                },
                {
                  field: {
                    _id: '4b226314-0364-43d7-939b-4cdc0e49ba18',
                    fieldId: 'preferredName',
                    label: 'Preferred Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  display:{
                    flex:100
                  },
                  apiModelRef: ['patientInfo', 'preferredName'],
                },
              ],
            },
            {
              label: 'Patient Sex',
              fieldGroups: [
                {
                  field: {
                    _id: 'ac9a1daa-351e-472e-8e92-24898f999299',
                    fieldId: 'sex',
                    label: 'Sex',
                    answerType: {
                      _id: 'f8ede78d-8a9d-48c9-aca5-fd25612ac31b',
                      answerType: 'radio',
                      choicesAvailable: true,
                    },
                    choices: [ 'Female','Male','Other'],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['patientInfo', 'sex'],
                },
              ],
            },
            {
              label: 'Patient DOB',
              fieldGroups: [
                {
                  field: {
                    _id: '07093a2d-1906-4787-9598-fd8d6ff2b003',
                    fieldId: 'dob',
                    label: 'DOB',
                    answerType: {
                      _id: 'c8455c4b-ab7e-49fb-8bba-6e20d2a2e311',
                      answerType: 'date',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['patientInfo', 'dateOfBirth'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      pageId: 2,
      pageName: 'Contact Details',
      stepName: 'contactDetails',
      section: [
        {
          questions: [
            {
              label: 'Phone',
              fieldGroups: [
                {
                  field: {
                    _id: '00b31592-dcdf-4074-b0ca-e28f8c3170c0',
                    fieldId: 'phone',
                    label: 'Phone',
                    answerType: {
                      _id: 1,
                      answerType: 'phone',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['contactDetails', 'phoneNumber'],
                },
              ],
            },
            {
              label: 'Email',
              fieldGroups: [
                {
                  field: {
                    _id: 'dcadf930-cdc0-49b7-ad7e-a307802888d9',
                    fieldId: 'email',
                    label: 'Email',
                    answerType: {
                      _id: '1697c9fb-889f-4b88-8a66-11517d1817bd',
                      answerType: 'email',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['contactDetails', 'email'],
                },
              ],
            },
            {
              label: 'Address',
              fieldGroups: [
                {
                  field: {
                    _id: 'fb46be54-d32d-4794-b4db-d3ddbed4799e',
                    fieldId: 'address1',
                    label: 'Address 1',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  display:{
                    flex:100
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['contactDetails', 'address1'],
                },
                {
                  field: {
                    _id: '2fc25e75-c7bb-446f-b7f3-fc96e330a7b7',
                    fieldId: 'address2',
                    label: 'Address 2',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  display:{
                    flex:100
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['contactDetails', 'address2'],
                },
                {
                  field: {
                    _id: 'a5c5568f-526a-4d51-9ae2-1c3f43f01725',
                    fieldId: 'city',
                    label: 'City',
                    answerType: {
                      _id: '2e8db735-8434-4dcd-9f39-658b2e6085b5',
                      answerType: 'dropdown-search',
                      choicesAvailable: true,
                    },
                  },
                  display:{
                    flex:33
                  },
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['contactDetails', 'city'],
                },
                {
                  field: {
                    _id: 'a5c5568f-526a-4d51-9ae2-1c3f43f01725',
                    fieldId: 'state',
                    label: 'State',
                    answerType: {
                      _id: '2e8db735-8434-4dcd-9f39-658b2e6085b5',
                      answerType: 'dropdown-search',
                      choicesAvailable: true,
                    },

                  },
                  display:{
                    flex:33
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['contactDetails', 'state'],
                },
                {
                  field: {
                    _id: 'a5c5568f-526a-4d51-9ae2-1c3f43f01725',
                    fieldId: 'zipCode',
                    label: 'Zip Code',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  display:{
                    flex:33
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['contactDetails', 'zipCode'],
                },
              ],
            },
            {
              label: 'Emergency Contact Name',
              fieldGroups: [
                {
                  field: {
                    _id: 'aef5d2f0-a0cc-4147-b26e-68da6cf07bfc',
                    fieldId: 'emergencyContactName',
                    label: 'Emergency Contact Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['emergencyContact', 'name'],
                },
              ],
            },
            {
              label: 'Emergency Contact Phone',
              fieldGroups: [
                {
                  field: {
                    _id: 'c6221bdc-2d1f-447e-8a20-7f504a3ccf17',
                    fieldId: 'emergencyContactPhone',
                    label: 'Emergency Contact Phone',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'phone',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['emergencyContact', 'phone'],
                },
              ],
            },
            {
              label: 'I have a Primary Care Physician',
              fieldGroups: [
                {
                  field: {
                    _id: '1c20aa1d-744d-4a42-bd72-2bcfe5bf489d',
                    fieldId: 'havePrimaryCarePhysician',
                    label: 'I have a Primary Care Physician',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  value:false,
                  apiModelRef: ['primaryCare', 'care'],
                },
              ],
            },
            {
              label: 'Primary Care Physician',
              fieldGroups: [
                {
                  field: {
                    _id: '45f81ec9-faf9-4f5c-8a4f-88a4a79f6887',
                    fieldId: 'primaryCarePhysician',
                    label: 'Primary Care Physician',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['primaryCare', 'physician'],
                },
              ],
              showIf: {
                pageIndex: 1,
                sectionIndex: 0,
                questionIndex: 5,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label: 'Primary Care Phone',
              fieldGroups: [
                {
                  field: {
                    _id: 'e9fe8873-508f-42a3-9163-a3bca1169091',
                    fieldId: 'primaryCarePhone',
                    label: 'Primary Care Phone',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'phone',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['primaryCare', 'phone'],
                },
              ],
              showIf: {
                pageIndex: 1,
                sectionIndex: 0,
                questionIndex: 5,
                fieldIndex: 0,
                choice: true,
              },
            },
          ],
        },
      ],
    },
    {
      pageId: 3,
      pageName: 'Insurance',
      stepName: 'insurance',
      section: [
        {
          questions: [
            {
              label: 'Payment Type',
              fieldGroups: [
                {
                  field: {
                    _id: 'f47d498e-56cf-4b43-9b92-948a065b953a',
                    fieldId: 'paymentType',
                    label: 'Payment Type',
                    answerType: {
                      _id: '1ea5912e-7378-4dd9-ad8f-12025e3ede53',
                      answerType: 'dropdown',
                      choicesAvailable: true,
                    },
                    choices: [ 'Self', 'Insurance','Employee Authorized'],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['payment', 'type'],
                },
              ],
            },

            {
              label: 'Photo',
              fieldGroups: [
                {
                  field: {
                    _id: '33317823-3baa-486c-b9e0-e5c7a819ad94',
                    fieldId: 'insurancePhoto',
                    label: 'Photo',
                    answerType: {
                      _id: 'd5c8dc90-5fc2-49e3-9c76-4b6f3b2ea13e',
                      answerType: 'scan',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['insuranceInfo', 'insuranceIdUri'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Insurance'
              },
            },
            {
              label: 'insurance Company',
              fieldGroups: [
                {
                  field: {
                    _id: '6434418f-b239-47ee-b137-5a6ddf86853f',
                    fieldId: 'insuranceCompany',
                    label: 'Insurance Company',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['insuranceInfo', 'insuranceCompany'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Insurance'

              },
            },
            {
              label: 'Insurance',
              fieldGroups: [
                {
                  field: {
                    _id: '8248a866-1642-41d6-8e87-e766c1bfa306',
                    fieldId: 'memberId',
                    label: 'Select Carrier',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'dropdown',
                      choicesAvailable: true,

                    },
                    choices: [ 'Aetna','Blue Cross','Cigna','Humana','Kaiser','Medicaid','Medicare','Tricare','United Healthcare','Other'],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['insuranceInfo', 'insuranceCarrier'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Insurance'
              },
            },
            {
              label: 'SSN ',
              fieldGroups: [
                {
                  field: {
                    _id: 'b8a72714-5dae-4636-bddb-4732e722c576',
                    fieldId: 'ssn',
                    label: 'SSN',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'ssn',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['insuranceInfo', 'ssn'],
                },
              ],
              showIfAny: [{
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 3,
                fieldIndex: 0,
                choice: 'Aetna'
              },
              {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 3,
                fieldIndex: 0,
                choice: 'Tricare'
              }],
            },
            {
              label: 'Member ID',
              fieldGroups: [
                {
                  field: {
                    _id: '8248a866-1642-41d6-8e87-e766c1bfa306',
                    fieldId: 'memberId',
                    label: 'Member ID',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['insuranceInfo', 'memberId'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Insurance'
              },
            },

            {
              label: 'Group #',
              fieldGroups: [
                {
                  field: {
                    _id: 'b8a72714-5dae-4636-bddb-4732e722c576',
                    fieldId: 'groupNumber',
                    label: 'Group #',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['insuranceInfo', 'groupNumber'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Insurance'
              },
            },
            {
              label: 'Secondary Insurance (If Applicable)',
              fieldGroups: [
                {
                  field: {
                    _id: '2a1c15d1-e8d2-42b5-9a7d-9044dc0579ff',
                    fieldId: 'secondaryInsurance',
                    label: '',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['insuranceInfo', 'secondaryInsurance'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Insurance'
              },
            },
            {
              label: 'Employer',
              fieldGroups: [
                {
                  field: {
                    _id: '86fa99fa-6e67-467b-a7ba-f0de806637c8',
                    fieldId: 'employer',
                    label: 'Employer',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['employer', 'employer'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Employee Authorized'
              },
            },
            {
              label: 'Employer Contact Name',
              fieldGroups: [
                {
                  field: {
                    _id: 'd2d366ef-5a68-471c-b6f7-8773012df1b0',
                    fieldId: 'employerContactName',
                    label: 'Employer Contact Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['employer', 'contactName'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Employee Authorized'
              },
            },
            {
              label: 'Employer Contact Phone Number',
              fieldGroups: [
                {
                  field: {
                    _id: '4dd110aa-0156-418a-aea1-184e783d83c8',
                    fieldId: 'employerContactNumber',
                    label: 'Employer Contact Phone Number',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'phone',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['employer', 'contactPhoneNumber'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Employee Authorized'
              },
            },
            {
              label: 'Employer Address',
              fieldGroups: [
                {
                  field: {
                    _id: 'fb46be54-d32d-4794-b4db-d3ddbed4799e',
                    fieldId: 'address1',
                    label: 'Address 1',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  display:{
                    flex:100
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['employer', 'address1'],
                },
                {
                  field: {
                    _id: '2fc25e75-c7bb-446f-b7f3-fc96e330a7b7',
                    fieldId: 'address2',
                    label: 'Address 2',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  display:{
                    flex:100
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['employer', 'address2'],
                },
                {
                  field: {
                    _id: 'a5c5568f-526a-4d51-9ae2-1c3f43f01725',
                    fieldId: 'city',
                    label: 'City',
                    answerType: {
                      _id: '2e8db735-8434-4dcd-9f39-658b2e6085b5',
                      answerType: 'dropdown-search',
                      choicesAvailable: true,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  display:{
                    flex:33
                  },
                  apiModelRef: ['employer', 'city'],
                },
                {
                  field: {
                    _id: 'a5c5568f-526a-4d51-9ae2-1c3f43f01725',
                    fieldId: 'state',
                    label: 'State',
                    answerType: {
                      _id: '2e8db735-8434-4dcd-9f39-658b2e6085b5',
                      answerType: 'dropdown-search',
                      choicesAvailable: true,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  display:{
                    flex:33
                  },
                  apiModelRef: ['employer', 'state'],
                },
                {
                  field: {
                    _id: 'a5c5568f-526a-4d51-9ae2-1c3f43f01725',
                    fieldId: 'zipCode',
                    label: 'Zip Code',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  display:{
                    flex:33
                  },
                  apiModelRef: ['employer', 'zipCode'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Employee Authorized'
              },
            },
            {
              label: 'What are you here for',
              fieldGroups: [
                {
                  field: {
                    _id: 'a1cf8d09-f408-4a4a-a3b4-30ed00cc439d',
                    fieldId: 'employerReasonForVisit',
                    label: 'What are you here for',
                    answerType: {
                      _id: '1ea5912e-7378-4dd9-ad8f-12025e3ede53',
                      answerType: 'dropdown',
                      choicesAvailable: true,
                    },
                    choices: ['Physical','Drug Screen and/or Alcohol Test','Work Injury'],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['employer', 'reason'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice:'Employee Authorized',
              },
            },
          ],
          footer: {
            message:
              'No additional information needed for self pay. Please proceed to next step',
            showIf: {
              pageIndex: 2,
              sectionIndex: 0,
              questionIndex: 0,
              fieldIndex: 0,
              choice: 'Self'
            },
          },
        },
      ],
    },
    {
      pageId: 4,
      pageName: 'Medicare',
      stepName: 'medicare',
      section: [
        {
          questions: [
            {
              label: '',
              labelHeader:'You are not elligible for Medicare, since you are not paying with insurance. Please proceed with the next step',
              fieldGroups: [
                {
                  field: {
                    _id: '7c4436a3-74e3-464c-9446-85dde66684e6',
                    fieldId: '',
                    label: '',
                    labelHeader:'You are not elligible for Medicare, since you are not paying with insurance. Please proceed with the next step',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'others',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                },
              ],
              showIfAny:[ {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Self'
              },
              {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Employee Authorized'
              },
            ]
            },
            {
              label: 'Medicare',
              fieldGroups: [
                {
                  field: {
                    _id: '7c4436a3-74e3-464c-9446-85dde66684e6',
                    fieldId: 'isMedicare',
                    label: 'Medicare',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['medicare', 'isMedicareAvailable'],
                },
              ],
              showIf: {
                pageIndex: 2,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                 choice:  'Insurance',
              },
            },
            {
              label: 'Patient Name',
              fieldGroups: [
                {
                  field: {
                    _id: '8cfecb4c-dc0d-4461-b264-33c94361c2ad',
                    fieldId: 'firstName',
                    label: 'First Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  display:{
                    flex:100
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['medicare', 'firstName'],
                },
                {
                  field: {
                    _id: '084532e2-9056-4320-9bac-7a76b1db72ff',
                    fieldId: 'lastName',
                    label: 'Last Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  display:{
                    flex:50
                  },
                  apiModelRef: ['medicare', 'lastName'],
                },
                {
                  field: {
                    _id: '705e0c39-b66c-466e-9b25-86ec27368de9',
                    fieldId: 'middleName',
                    label: 'Middle Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  display:{
                    flex:50
                  },
                  apiModelRef: ['medicare', 'middleName'],
                },
                {
                  field: {
                    _id: '4b226314-0364-43d7-939b-4cdc0e49ba18',
                    fieldId: 'preferredName',
                    label: 'Preferred Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  display:{
                    flex:100
                  },
                  apiModelRef: ['medicare', 'preferredName'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label: 'Patient DOB',
              fieldGroups: [
                {
                  field: {
                    _id: '07093a2d-1906-4787-9598-fd8d6ff2b003',
                    fieldId: 'dob',
                    label: 'DOB',
                    answerType: {
                      _id: 'c8455c4b-ab7e-49fb-8bba-6e20d2a2e311',
                      answerType: 'date',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['medicare', 'dateOfBirth'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label: 'Patient SSN',
              fieldGroups: [
                {
                  field: {
                    _id: 'd976b8e3-2cd7-44e0-b87a-391a2a094518',
                    fieldId: 'ssn',
                    label: 'SSN',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'ssn',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['medicare', 'ssn'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
          ],
        },
        {
          questions: [
            {
              label: 'Are you receiving Black Lung (BL) Benefits?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'blackLungBenefits'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label:
                'Are these services to be paid by a government research program?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'paidByGovernment'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label:
                'Are you entitled to benefits through the Departent of Veterans Affairs (DVA)?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'benefitsThroughDVA'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label:
                'Was the illness/injury due to a work-related accident/condition?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'illnessDueToWork'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
          ],
          footer: {
            message:
              'If you answered yes to any of the above questions, please see the front desk specialist before completing this form',
            showIf: {
              pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
            },
          },
          showIf: {
            pageIndex: 3,
            sectionIndex: 0,
            questionIndex: 1,
            fieldIndex: 0,
            choice: true,
          },
        },
        {
          questions: [
            {
              label:
                'Was the illness injury due to a non-work-related accident?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'illnessDueToNonWork'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
          ],
          showIf: {
            pageIndex: 3,
            sectionIndex: 0,
            questionIndex: 1,
            fieldIndex: 0,
            choice: true,
          },
        },
        {
          questions: [
            {
              label: 'Are you entitled to Medicare based on Age?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'medicareBasedOnAge'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label: 'Are you entitled to Medicare based on Disability?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'medicareBasedOnDiability'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label:
                'Are you entitled to Medicare based on End-Stage Renal Disease (ESRD)?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'esrd'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
          ],
          footer: {
            message:
              'Please note that both "Age" and "ESRD" OR both "Disability" and "ESRD" may be selected simultaneously',
            showIf: {
              pageIndex: 3,
              sectionIndex: 0,
              questionIndex: 1,
              fieldIndex: 0,
              choice:true
            },
          },
          showIf: {
            pageIndex: 3,
            sectionIndex: 0,
            questionIndex: 1,
            fieldIndex: 0,
            choice:true
          },
        },
        {
          questions: [
            {
              label: 'Are you currently employed? If applicable, enter date of retirement',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'employed'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label: 'Date Of Retirement',
              fieldGroups: [
                {
                  field: {
                    _id: '9a7c2ccb-0597-41f6-addb-17dbbbc89545',
                    fieldId: 'dateOfRetirement',
                    label: 'Date Of Retirement',
                    answerType: {
                      _id: 'c8455c4b-ab7e-49fb-8bba-6e20d2a2e311',
                      answerType: 'date',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['medicare', 'dateOfRetirement'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 4,
                questionIndex: 0,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label: 'Do you have a spouse who is currently employed If applicable, enter date of retirement?',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'yourSpouseEmployed'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label: 'Date Of Retirement',
              fieldGroups: [
                {
                  field: {
                    _id: '9a7c2ccb-0597-41f6-addb-17dbbbc89545',
                    fieldId: 'dateOfRetirement',
                    label: 'Date Of Retirement',
                    answerType: {
                      _id: 'c8455c4b-ab7e-49fb-8bba-6e20d2a2e311',
                      answerType: 'date',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['medicare', 'spouseDateOfRetirement'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 4,
                questionIndex: 2,
                fieldIndex: 0,
                choice: true,
              },
            },
            {
              label:
                "If you have GHP coverage based on your spouse's current employment, does your spouse's employer that sponsors or contributes to the GHP employ 20 or more employees?",
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value:false,
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['medicare', 'ghpCoverage'],
                },
              ],
              showIf: {
                pageIndex: 3,
                sectionIndex: 0,
                questionIndex: 1,
                fieldIndex: 0,
                choice: true,
              },
            },
          ],
          showIf: {
            pageIndex: 3,
            sectionIndex: 0,
            questionIndex: 1,
            fieldIndex: 0,
            choice: true,
          },
        },
      ],
    },
    {
      pageId: 5,
      pageName: 'Insurance Holder',
      stepName: 'insuranceHolder',
      section: [
        {
          questions: [
            {
              label: 'Relationship',
              fieldGroups: [
                {
                  field: {
                    _id: '9d47b6e1-13c4-43af-8774-76944018536f',
                    fieldId: 'relationship',
                    label: 'Relationship',
                    answerType: {
                      _id: '1ea5912e-7378-4dd9-ad8f-12025e3ede53',
                      answerType: 'dropdown',
                      choicesAvailable: true,
                    },
                    choices: [ 'Self', 'Mother','Father','Spouse','Others - Specify'],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['subscriberInfo', 'relationship'],
                },
              ],
            },
            {
              label: 'Specify Relationship',
              fieldGroups: [
                {
                  field: {
                    _id: 'ff5a63f4-6fd9-4ad3-8a12-4a373fe91147',
                    fieldId: 'others',
                    label: 'Others',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['subscriberInfo', 'relationshipOther'],
                },
              ],
              showIf: {
                pageIndex: 4,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: 'Others - Specify'
              },
            },
            {
              label: 'Insurance Holder First Name',
              fieldGroups: [
                {
                  field: {
                    _id: '8cfecb4c-dc0d-4461-b264-33c94361c2ad',
                    fieldId: 'firstName',
                    label: 'First Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['subscriberInfo', 'firstName'],
                },
              ],
              showIfAny: [
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Mother'
                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Father',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Spouse',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice:  'Others - Specify'
                },
              ],
            },
            {
              label: 'Insurance Holder Last Name',
              fieldGroups: [
                {
                  field: {
                    _id: '084532e2-9056-4320-9bac-7a76b1db72ff',
                    fieldId: 'lastName',
                    label: 'Last Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['subscriberInfo', 'lastName'],
                },
              ],
              showIfAny: [
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Mother',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Father',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Spouse',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Others - Specify',

                },
              ],
            },
            {
              label: 'Insurance Holder DOB',
              fieldGroups: [
                {
                  field: {
                    _id: '07093a2d-1906-4787-9598-fd8d6ff2b003',
                    fieldId: 'dob',
                    label: 'DOB',
                    answerType: {
                      _id: 'c8455c4b-ab7e-49fb-8bba-6e20d2a2e311',
                      answerType: 'date',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['subscriberInfo', 'dateOfBirth'],
                },
              ],
              showIfAny: [
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Mother'
                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Father',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Spouse',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Others - Specify',
                },
              ],
            },
            {
              label: 'Insurance Holder SSN',
              fieldGroups: [
                {
                  field: {
                    _id: 'd976b8e3-2cd7-44e0-b87a-391a2a094518',
                    fieldId: 'ssn',
                    label: 'SSN',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'ssn',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['subscriberInfo', 'ssn'],
                },
              ],
              showIfAny: [
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Mother',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Father',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Spouse',

                },
                {
                  pageIndex: 4,
                  sectionIndex: 0,
                  questionIndex: 0,
                  fieldIndex: 0,
                  choice: 'Others - Specify',

                },
              ],
            },
          ],
        },
      ],
    },
    {
      pageId: 6,
      pageName: 'Finance Responsibility',
      stepName: 'financialResponsibility',
      section: [
        {
          questions: [
            {
              label: 'Self (Patient)',
              fieldGroups: [
                {
                  field: {
                    _id: '81b7a437-267f-47b1-9017-6ec3755fff68',
                    fieldId: 'yesOrNo',
                    label: 'Yes or No',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  value: false,
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['responsibleParty', 'self'],
                },
              ],
            },
            {
              label: 'Responsible Party First Name',
              fieldGroups: [
                {
                  field: {
                    _id: '8cfecb4c-dc0d-4461-b264-33c94361c2ad',
                    fieldId: 'firstName',
                    label: 'First Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['responsibleParty', 'firstName'],
                },
              ],
              showIf: {
                pageIndex: 5,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: false,
              },
            },
            {
              label: 'Responsible Party Last Name',
              fieldGroups: [
                {
                  field: {
                    _id: '084532e2-9056-4320-9bac-7a76b1db72ff',
                    fieldId: 'lastName',
                    label: 'Last Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['responsibleParty', 'lastName'],
                },
              ],
              showIf: {
                pageIndex: 5,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: false,
              },
            },
            {
              label: 'Responsible Party DOB',
              fieldGroups: [
                {
                  field: {
                    _id: '07093a2d-1906-4787-9598-fd8d6ff2b003',
                    fieldId: 'dob',
                    label: 'DOB',
                    answerType: {
                      _id: 'c8455c4b-ab7e-49fb-8bba-6e20d2a2e311',
                      answerType: 'date',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['responsibleParty', 'dateOfBirth'],
                },
              ],
              showIf: {
                pageIndex: 5,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: false,
              },
            },
            {
              label: 'Responsible Party Phone',
              fieldGroups: [
                {
                  field: {
                    _id: '00b31592-dcdf-4074-b0ca-e28f8c3170c0',
                    fieldId: 'phone',
                    label: 'Phone',
                    answerType: {
                      _id: 1,
                      answerType: 'phone',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['responsibleParty', 'phone'],
                },
              ],
              showIf: {
                pageIndex: 5,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: false,
              },
            },
            {
              label: 'Responsible Party Email',
              fieldGroups: [
                {
                  field: {
                    _id: 'dcadf930-cdc0-49b7-ad7e-a307802888d9',
                    fieldId: 'email',
                    label: 'Email',
                    answerType: {
                      _id: '1697c9fb-889f-4b88-8a66-11517d1817bd',
                      answerType: 'email',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  apiModelRef: ['responsibleParty', 'email'],
                },
              ],
              showIf: {
                pageIndex: 5,
                sectionIndex: 0,
                questionIndex: 0,
                fieldIndex: 0,
                choice: false,
              },
            },
          ],
        },
      ],
    },
    {
      pageId: 7,
      pageName: 'Condition of Service and Consent to Treat',
      stepName: 'condOfServAndConsentToTreat',
      section: [
        {
          header: {
            message:
              'PLEASE DO NOT SIGN THIS FORM WITHOUT READING THE ENTIRE CONTENT',
          },
          questions: [
            {
              labelHtml:
                '<strong>Consent to Routine Medical Treatment/ Services</strong>  <p>By submitting this Consent Form (the "Conditions of Service and Consent to Treat") and agreeing to the Terms and Conditions set out herein, you ("you", "your", "undersigned representative acting on behalf of the Patient") provide your consent to the following: Consent to Routine Medical Treatment/Services Patient consents to the rendering of Medical Treatment/Services as considered necessary and appropriate by the attending physician or other practitioner, a member of the Beaumont Urgent Care, LaGrange, 1524 Lafayette Pkw medical staff who has requested care and treatment of Patient, and others with staff privileges at Beaumont Urgent Care, LaGrange, 1524 Lafayette Pkw.</p><p>Medical Treatment/Services may be performed by "Healthcare Professionals" (physicians, nurses, technologists, technicians, physician assistants, or other healthcare professionals). Patient authorizes the attending or other practitioner, the medical staff of Beaumont Urgent Care, LaGrange, 1524 Lafayette Pkw and Beaumont Urgent Care, LaGrange, 1524 Lafayette Pkw to provide Medical Treatment/Services ordered or requested by attending or another practitioner, and those acting in his or her place.</p><p>The consent to receive "Medical Treatment/Services" includes, but is not limited to: urgent care; examinations(x-ray or otherwise); laboratory procedures; medications; infusions; drugs;supplies; anesthesia;surgical procedures and medical treatments; recording/filming for internal purposes (i.e. Identification, diagnosis, treatment, performance improvement, education, safety, security) and other services which Patient may receive. In the event Beaumont Urgent Care, LaGrange, 1524 Lafayette Pkw determines that Patient should provide blood specimens for testing purposes in the interest of the safety of those with whom Patient may come in contact; Patient consents to the withdrawing and testing of Patient\'s blood and to the release of test information where this is deemed appropriate for the safety of others.</p>',
              fieldGroups: [
                {
                  field: {
                    _id: '7ab953ed-aff4-4df0-b4dc-97c56a17c787',
                    fieldId: 'consentToTreat',
                    label:
                      'PLEASE DO NOT SIGN THIS FORM WITHOUT READING THE ENTIRE CONTENT \n By submitting this Consent Form (the “Conditions of Service and Consent to Treat”) and agreeing to the Terms and Conditions set out herein, you (“you”, “your”, “undersigned representative acting on behalf of the Patient”) provide your consent to the following: Consent to Routine Medical Treatment/Services Patient consents to the rendering of Medical Treatment/Services as considered necessary and appropriate by the attending physician or other practitioner, a member of the <Wellstreet> medical staff who has requested care and treatment of Patient, and others with staff privileges at <Wellstreet> . Medical Treatment/Services may be performed by "Healthcare Professionals" (physicians, nurses, technologists, technicians, physician assistants, or other healthcare professionals). Patient authorizes the attending or other practitioner, the medical staff of <Wellstreet> and <Wellstreet> to provide Medical Treatment/Services ordered or requested by attending or another practitioner, and those acting in his or her place. The consent to receive "Medical Treatment/Services" includes, but is not limited to: urgent care; examinations(x-ray or otherwise); laboratory procedures; medications; infusions; drugs;supplies; anesthesia;surgical procedures and medical treatments; recording/filming for internal purposes (i.e. Identification, diagnosis, treatment, performance improvement, education, safety, security) and other services which Patient may receive. In the event <Wellstreet> determines that Patient should provide blood specimens for testing purposes in the interest of the safety of those with whom Patient may come in contact; Patient consents to the withdrawing and testing of Patient\'s blood and to the release of test information where this is deemed appropriate for the safety of others.',
                    answerType: {
                      _id: 'e7a56849-3103-416a-be78-78ac8746f16a',
                      answerType: 'consent',
                      choicesAvailable: true,
                    },
                    choices: [
                      {
                        id: 1,
                        value: 'I Consent',
                      },
                    ],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['consentToTreat'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      pageId: 8,
      pageName: 'Patient Financial Responsibility',
      stepName: 'patientFinancialResponsibility',
      section: [
        {
          questions: [
            {
              labelHtml:
                'Patient acknowledges they are financially responsible for any out-of-pocket expenses for medical services and treatment including copayments, coinsurance, deductibles, and services not payable by the patient’s health plan. Co-payments are due at time of service. Patient agrees to obtain any necessary referrals prior to visit. Charges for all minors are the responsibility of the parent, guardian, or individual presenting the child for treatment. Patient acknowledges agreement to pay for all medical services and treatment provided at time of service if payment type is self-pay. Patient acknowledges medical services/treatment will be self-pay if active insurance information is not provided within 24 hours of medical services and treatment.',
              fieldGroups: [
                {
                  field: {
                    _id: '82890d13-b9f3-42e5-b233-7b248bdeac70',
                    fieldId: 'patientFinancialResponsibility',
                    label:
                      'Patient acknowledges they are financially responsible for any out-of-pocket expenses for medical services and treatment including copayments, coinsurance, deductibles, and services not payable by the patient’s health plan. Co-payments are due at time of service. Patient agrees to obtain any necessary referrals prior to visit. Charges for all minors are the responsibility of the parent, guardian, or individual presenting the child for treatment. Patient acknowledges agreement to pay for all medical services and treatment provided at time of service if payment type is self-pay. Patient acknowledges medical services/treatment will be self-pay if active insurance information is not provided within 24 hours of medical services and treatment.',
                    answerType: {
                      _id: 'e7a56849-3103-416a-be78-78ac8746f16a',
                      answerType: 'consent',
                      choicesAvailable: true,
                    },
                    choices: [
                      {
                        id: 1,
                        value: 'I Consent',
                      },
                    ],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['financialSignature'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      pageId: 9,
      pageName: 'Authorization to Release Information',
      stepName: 'authToReleaseInfo',
      section: [
        {
          questions: [
            {
              labelHtml:
                '<Wellstreet> is authorized to use and release information contained in the patient record as described in the <Wellstreet> Notice of Privacy Practices and as otherwise permitted or required by law. The information authorized to be used or released will include, but is not limited to, infectious or contagious disease information, including HIV or AIDS-related evaluations, diagnosis or treatment, information about drug or alcohol abuse or treatment of same and/or psychiatric or psychological information. Patient waives any privilege pertaining to such confidential information and hereby releases <Wellstreet> , its agents and employees from all liabilities, responsibilities, damages, claims, and expenses arising from the use and release of information as authorized above. Permissible uses and disclosures include, but are not limited to, disclosures to insurance companies, their agents or other third party payors and/or government or social service agencies that may or will pay for any part of the medical expenses incurred or authorized by representatives of <Wellstreet> . PATIENT ACKNOWLEDGES AND AGREES THAT PATIENT’S RECORDS WILL BE AVAILABLE TO ALL <Wellstreet> AFFILIATED ENTITIES AND PROVIDERS, AND TO NON- <Wellstreet> AFFILIATED REFERRING PROVIDERS IN COMPLIANCE WITH THE PROVISIONS OF MEANINGFUL USE. By consenting to treatment and accepting financial responsibility for any such treatment, Patient also understands and acknowledges that <Wellstreet> , may send Patient Satisfaction surveys, email, call and/or text the phone number Patient has provided with treatment-related information and patient financial responsibility balances.',
              fieldGroups: [
                {
                  field: {
                    _id: 'f64b188a-7025-4caa-937b-b35e3059edf8',
                    fieldId: 'authorizationToReleaseInformation',
                    label:
                      '<Wellstreet> is authorized to use and release information contained in the patient record as described in the <Wellstreet> Notice of Privacy Practices and as otherwise permitted or required by law. The information authorized to be used or released will include, but is not limited to, infectious or contagious disease information, including HIV or AIDS-related evaluations, diagnosis or treatment, information about drug or alcohol abuse or treatment of same and/or psychiatric or psychological information. Patient waives any privilege pertaining to such confidential information and hereby releases <Wellstreet> , its agents and employees from all liabilities, responsibilities, damages, claims, and expenses arising from the use and release of information as authorized above. Permissible uses and disclosures include, but are not limited to, disclosures to insurance companies, their agents or other third party payors and/or government or social service agencies that may or will pay for any part of the medical expenses incurred or authorized by representatives of <Wellstreet> . PATIENT ACKNOWLEDGES AND AGREES THAT PATIENT’S RECORDS WILL BE AVAILABLE TO ALL <Wellstreet> AFFILIATED ENTITIES AND PROVIDERS, AND TO NON- <Wellstreet> AFFILIATED REFERRING PROVIDERS IN COMPLIANCE WITH THE PROVISIONS OF MEANINGFUL USE. By consenting to treatment and accepting financial responsibility for any such treatment, Patient also understands and acknowledges that <Wellstreet> , may send Patient Satisfaction surveys, email, call and/or text the phone number Patient has provided with treatment-related information and patient financial responsibility balances.',
                    answerType: {
                      _id: 'e7a56849-3103-416a-be78-78ac8746f16a',
                      answerType: 'consent',
                      choicesAvailable: true,
                    },
                    choices: [
                      {
                        id: 1,
                        value: 'I Consent',
                      },
                    ],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['autorizationToReleaseSignature'],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      pageId: 10,
      pageName: 'Acknowledgement of Patient Rights and Privacy Practices',
      stepName: 'ackOfRightsAndPrivacy',
      section: [
        {
          questions: [
            {
              labelHtml:
                `<Strong>Acknowledgement of Patient Rights and Privacy Practices</Strong> <p>By signing below, I acknowledge that I have received the <Urgent Care name>by WellStreet Patient Rights and notice of Privacy Practices and Individual Rights. I acknowledge that I have read the above, am giving my consent to the above, and have been informed of my rights to privacy. </p>`,
              fieldGroups: [
                {
                  field: {
                    _id: 'b3c4b77a-603c-405f-8d44-612e4f825a8c',
                    fieldId: 'acknowledgementOfRightAndPrivacy',
                    label:
                      'By signing below, I acknowledge that I have received the <Urgent Care name>by WellStreet Patient Rights and notice of Privacy Practices and Individual Rights. I acknowledge that I have read the above, am giving my consent to the above, and have been informed of my rights to privacy.',
                    answerType: {
                      _id: 'e7a56849-3103-416a-be78-78ac8746f16a',
                      answerType: 'consent',
                      choicesAvailable: true,
                    },
                    choices: [
                      {
                        id: 1,
                        value: 'I Consent',
                      },
                    ],
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['rightAndPrivacy','contentTOPrivacy'],
                },
              ],
            },
            {
              label: 'Patient First Name',
              fieldGroups: [
                {
                  field: {
                    _id: '00b31592-dcdf-4074-b0ca-e28f8c3170c0',
                    fieldId: 'phone',
                    label: 'First Name',
                    answerType: {
                      _id: 1,
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['rightAndPrivacy', 'firstName'],
                },
              ],
            },

            {
              label: 'Patient Signature of Patient or Parent / Guardian',
              fieldGroups: [
                {
                  field: {
                    _id: '00b31592-dcdf-4074-b0ca-e28f8c3170c0',
                    fieldId: 'phone',
                    label: 'Phone',
                    answerType: {
                      _id: 1,
                      answerType: 'signature',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                  apiModelRef: ['rightAndPrivacy', 'signature'],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}

const checkinSteps = {
  _id: '3b490cec-9b04-4a14-9a59-c0ac3f232222',
  formTemplateName: 'Check In Template',
  pages: [
    {
      pageId: 1,
      pageName: 'Checkin',
      section: [
        {
          questions: [
            {
              label: 'Patient First Name',
              fieldGroups: [
                {
                  field: {
                    _id: '6958c694-25da-4024-a246-10726c7c234b',
                    fieldId: 'firstName',
                    label: 'Patient First Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                },
              ],
            },
            {
              label: 'Patient Last Name',
              fieldGroups: [
                {
                  field: {
                    _id: '9bbf3e7d-0601-410b-8c47-0a2973674bd6',
                    fieldId: 'lastName',
                    label: 'Patient Last Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                },
              ],
            },
            {
              label: 'Patient Date of Birth',
              fieldGroups: [
                {
                  field: {
                    _id: '62f1432d-f587-4137-b745-9a900129c184',
                    fieldId: 'dateOfBirth',
                    label: 'Patient Date of Birth',
                    answerType: {
                      _id: 'c8455c4b-ab7e-49fb-8bba-6e20d2a2e311',
                      answerType: 'date',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                },
              ],
            },
            {
              label: 'Reason For Visit',
              fieldGroups: [
                {
                  field: {
                    _id: 'f1b2e362-ca6f-48f7-a5cc-b010b9114e73',
                    fieldId: 'reason',
                    label: 'Reason For Visit',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'dropdown',
                      choicesAvailable: true,
                    },
                    choices: ['Injury','Illness','Other'
                    ],
                  },
                  validation: {
                    required: true,
                  },
                },
              ],
            },
            {
              label: 'Reason',
              fieldGroups: [
                {
                  field: {
                    _id: '9bbf3e7d-0601-410b-8c47-0a2973674bd6',
                    fieldId: 'reason',
                    label: 'Patient Last Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                },
              ],
              showIfAny: [{
                pageIndex: 0,
                sectionIndex: 0,
                questionIndex: 3,
                fieldIndex: 0,
                choice: 'Injury',
              },
              {
                pageIndex: 0,
                sectionIndex: 0,
                questionIndex: 3,
                fieldIndex: 0,
                choice: 'Illness',
              }
            ],
            },
            {
              label: 'Reason',
              fieldGroups: [
                {
                  field: {
                    _id: '9bbf3e7d-0601-410b-8c47-0a2973674bd6',
                    fieldId: 'reason',
                    label: 'Patient Last Name',
                    answerType: {
                      _id: '0a479857-4ffe-4eb1-95da-60efa2f872e9',
                      answerType: 'text',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                },
              ],
              showIf: {
                pageIndex: 0,
                sectionIndex: 0,
                questionIndex: 3,
                fieldIndex: 0,
                choice: 'Other',
              },
            },
          ],
        },
        {
          questions: [
            {
              label: 'Email',
              fieldGroups: [
                {
                  field: {
                    _id: 'dcadf930-cdc0-49b7-ad7e-a307802888d9',
                    fieldId: 'email',
                    label: 'Email',
                    answerType: {
                      _id: '1697c9fb-889f-4b88-8a66-11517d1817bd',
                      answerType: 'email',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                },
              ],

            },
            {
              label: 'Phone',
              fieldGroups: [
                {
                  field: {
                    _id: '00b31592-dcdf-4074-b0ca-e28f8c3170c0',
                    fieldId: 'phoneNumber',
                    label: 'Phone',
                    answerType: {
                      _id: 1,
                      answerType: 'phone',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: true,
                  },
                },
              ],
            },
            {
              label: 'Receive SMS notifications about this visit?',
              fieldGroups: [
                {
                  field: {
                    _id: '1c20aa1d-744d-4a42-bd72-2bcfe5bf489d',
                    fieldId: 'consentToSMSNotification',
                    label: '',
                    answerType: {
                      _id: '24f305a4-1dcf-4500-b930-bf757e1507e8',
                      answerType: 'boolean',
                      choicesAvailable: false,
                    },
                  },
                  validation: {
                    required: false,
                  },
                  value: true,
                },
              ],
            },
          ]
        }
      ]
    }
  ]
}

const stepGroups = [
  { name: 'Patient Info', steps: { start: 1, end: 2 } },
  { name: 'Payment', steps: { start: 3, end: 6 } },
  { name: 'Authorization', steps: { start: 7, end: 10 } },
]

export { steps, checkinSteps,stepGroups }
export default steps
