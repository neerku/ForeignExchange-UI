import f from 'faker'
import m from 'moment'

const patient = () => {
  return {
    firstName: f.name.firstName(),
    lastName: f.name.lastName(),
    dob: m(f.date.past(50, new Date('1/1/2000'))).format('MM/DD/YYYY').split('/'),
    reason: '12:00 COVID Test',
  }
}

const conversations = [
  {
    patient: patient(),
    message: 'Do eu reprehenderit exercitation proident ut',
    at: '3m',
  },
  {
    patient: patient(),
    message:
      'You: Consequat commodo officia dolore enim deserunt. Magna esse irure ea enim eiusmod enim do. Sunt quis laborum excepteur sint elit reprehenderit tempor est nostrud deserunt. Aliquip non laborum aliqua laborum anim elit ea ad consectetur proident. Esse commodo Lorem Lorem aute occaecat officia voluptate consectetur nisi adipisicing culpa enim. Velit aliqua nostrud deserunt nisi laborum nulla et do occaecat aliquip. Nostrud dolore magna id incididunt ex amet officia.',
    at: '26m',
  },
  {
    patient: patient(),
    message: 'Thanks! 👍',
    at: '1h',
  },
  {
    patient: patient(),
    message: 'Enim excepteur et magna ',
    at: '1h',
  },
  {
    patient: patient(),
    message:
      'You: Aliqua aliquip',
    at: '2h',
  },
  {
    patient: patient(),
    message: 'Cillum velit dolor ea dolor proident deserunt. Anim laboris tempor nisi cillum enim consequat dolor labore dolore commodo do. Consectetur fugiat laboris elit et duis voluptate magna ad proident excepteur ut.',
    at: '2h',
  },
  {
    patient: patient(),
    message: 'Do eu reprehen',
    at: '2h',
  },
  {
    patient: patient(),
    message:
      'You: Ut deserunt non irure quis',
    at: '3h',
  },
  {
    patient: patient(),
    message: 'Tempor eu velit ea aliqua minim do. Cillum incididunt enim sunt eu ad enim dolor nisi nisi est. Quis proident eu est sit ullamco dolor ad non minim eiusmod minim. Adipisicing nulla proident pariatur nulla consequat irure ea cillum officia ex aliqua. Aliqua dolor eiusmod ipsum nulla.',
    at: '3h',
  },
  {
    patient: patient(),
    message: 'Do esse deserunt quis quis ipsum consequat nostrud occaecat velit aliquip dolore irure nulla. Qui Lorem ut sint elit. Ex mollit consectetur laborum aliquip. Veniam culpa consequat minim ipsum excepteur tempor amet laborum anim. Ut fugiat voluptate sint labore minim ex.',
    at: '3h',
  },
  {
    patient: patient(),
    message:
      'You: Culpa est irure est magna qui consectetur. Veniam amet elit magna exercitation velit sunt mollit commodo commodo ipsum non dolor in magna. Mollit Lorem qui amet culpa cupidatat. Non in laboris ut culpa occaecat adipisicing ut excepteur commodo eu sit magna velit. Eu proident ea minim sunt officia laborum est sunt ea sunt proident. Incididunt reprehenderit eu laboris aute officia mollit pariatur cupidatat dolore. Duis et esse laborum voluptate proident irure tempor dolor ipsum.',
    at: '5h',
  },
  {
    patient: patient(),
    message: 'Ut aute duis voluptate qui aute veniam sit nisi consectetur Lorem et ad labore. Do cupidatat elit culpa ipsum aute anim occaecat nulla et sint et Lorem excepteur ea. Anim quis dolor ipsum incididunt. Eiusmod elit amet laboris irure et sunt aliquip veniam nostrud. Voluptate ea irure quis cillum est laborum. Esse adipisicing aliqua ex ut culpa aliqua deserunt cillum.',
    at: '5h',
  },
]

export { conversations }
