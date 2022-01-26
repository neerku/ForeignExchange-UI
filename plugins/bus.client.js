import mitt from 'mitt'
const emitter = mitt()

export default (ctx, inject) => {
  inject('bus', {
    $on: emitter.on,
    $emit: emitter.emit
  })
}
