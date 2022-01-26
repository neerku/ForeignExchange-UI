import { v4 as uuid } from 'uuid'

export default (ctx) => {
  console.log(process.env.WS_BASE_URL)
  return {
    httpEndpoint: process.env.API_BASE_URL + '/graphql',
    wsEndpoint: process.env.WS_BASE_URL + '/graphql',
    // getAuth: () => {
    // return ctx.$auth.strategy.token.get()
    // },
    httpLinkOptions: {
      headers:{
          'Request-Id': uuid()
      }
  }
  }
}
