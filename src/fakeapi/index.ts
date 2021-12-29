import { createServer } from 'miragejs'
import consultas from './consultas'

export function initFakeApiServer(){
  createServer({
    routes() {
      consultas(this)
    },
  })
}
