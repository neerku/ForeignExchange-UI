const consentToTreat = (brand, location, address) => {
  return {
    title: 'Consent to Routine Medical Treatment/ Services',
    content: [
      `By submitting this Consent Form (the "Conditions of Service and Consent to Treat") and agreeing to the Terms and Conditions set out herein, you ("you", "your", "undersigned representative acting on behalf of the Patient") provide your consent to the following: Consent to Routine Medical Treatment/Services Patient consents to the rendering of Medical Treatment/Services as considered necessary and appropriate by the attending physician or other practitioner, a member of the ${brand}, ${location}, ${address} medical staff who has requested care and treatment of Patient, and others with staff privileges at ${brand}, ${location}, ${address}.`,
      ` Medical Treatment/Services may be performed by "Healthcare Professionals" (physicians, nurses, technologists, technicians, physician assistants, or other healthcare professionals). Patient authorizes the attending or other practitioner, the medical staff of ${brand}, ${location}, ${address} and ${brand}, ${location}, ${address} to provide Medical Treatment/Services ordered or requested by attending or another practitioner, and those acting in his or her place.`,
      `The consent to receive "Medical Treatment/Services" includes, but is not limited to: urgent care; examinations(x-ray or otherwise); laboratory procedures; medications; infusions; drugs;supplies; anesthesia;surgical procedures and medical treatments; recording/filming for internal purposes (i.e. Identification, diagnosis, treatment, performance improvement, education, safety, security) and other services which Patient may receive. In the event ${brand}, ${location}, ${address} determines that Patient should provide blood specimens for testing purposes in the interest of the safety of those with whom Patient may come in contact; Patient consents to the withdrawing and testing of Patient's blood and to the release of test information where this is deemed appropriate for the safety of others.`,
    ]
  }
}

const consentFinancial = (brand, location, address) => {
  return {
    content: [
      `Patient acknowledges they are financially responsible for any out-of-pocket expenses for medical services and treatment including copayments, coinsurance, deductibles, and services not payable by the patient's health plan. Co-payments are due at time of service. Patient agrees to obtain any necessary referrals prior to visit. Charges for all minors are the responsibility of the parent, guardian, or individual presenting the child for treatment. `,
      `Patient acknowledges agreement to pay for all medical services and treatment provided at time of service if payment type is self-pay. Patient acknowledges medical services/treatment will be self-pay if active insurance information is not provided within 24 hours of medical services and treatment.`,
    ],
  }
}

const consentRelease = (brand, location, address) => {
  return {
    content: [
      `${brand}, ${location}, ${address} is authorized to use and release information contained in the patient record as described in the ${brand}, ${location}, ${address} Notice of Privacy Practices and as otherwise permitted or required by law. The information authorized to be used or released will include, but is not limited to, infectious or contagious disease information, including HIV or AIDS-related evaluations, diagnosis or treatment, information about drug or alcohol abuse or treatment of same and/or psychiatric or psychological information. `,
      `Patient waives any privilege pertaining to such confidential information and hereby releases ${brand}, ${location}, ${address}, its agents and employees from all liabilities, responsibilities, damages, claims, and expenses arising from the use and release of information as authorized above. Permissible uses and disclosures include, but are not limited to, disclosures to insurance companies, their agents or other third party payors and/or government or social service agencies that may or will pay for any part of the medical expenses incurred or authorized by representatives of ${brand}, ${location}, ${address}.`,
      `PATIENT ACKNOWLEDGES AND AGREES THAT PATIENT'S RECORDS WILL BE AVAILABLE TO ALL ${brand}, ${location}, ${address} AFFILIATED ENTITIES AND PROVIDERS, AND TO NON- ${brand}, ${location}, ${address} AFFILIATED REFERRING PROVIDERS IN COMPLIANCE WITH THE PROVISIONS OF MEANINGFUL USE. `,
      `By consenting to treatment and accepting financial responsibility for any such treatment, Patient also understands and acknowledges that ${brand}, ${location}, ${address}, may send Patient Satisfaction surveys, email, call and/or text the phone number Patient has provided with treatment-related information and patient financial responsibility balances.`,
    ],
  }
}

const consentAcknowledgement = (brand, location, address) => {
  return {
    title: 'Acknowledgement of Patient Rights and Privacy Practices',
    content: [
      `By signing below, I acknowledge that I have received the ${brand}, ${location}, ${address} Patient Rights and notice of Privacy Practices and Individual Rights. I acknowledge that I have read the above, am giving my consent to the above, and have been informed of my rights to privacy.`,
    ],
  }
}

export {
  consentToTreat,
  consentFinancial,
  consentRelease,
  consentAcknowledgement,
}

