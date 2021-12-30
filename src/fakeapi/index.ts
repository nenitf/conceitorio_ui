import { createServer } from 'miragejs'
import consultas from './consultas'
import medicos from './medicos'

export function initFakeApiServer(){
  createServer({
    routes() {
      consultas(this)
      medicos(this)
    },
  })
}
