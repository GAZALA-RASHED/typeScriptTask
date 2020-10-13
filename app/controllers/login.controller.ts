import { login } from '../data/logIn'

export function get(request, response, next) {
  response.render('login', {})
}

export function log(request, response, next) {
  const id: string = request.body.id
  const pw: string = request.body.pw

  if (id == 'test' && pw == '1234') {
    response.end('login Success')
  } else {
    response.end('login Failed')
  }
}
