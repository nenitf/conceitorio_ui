import { Request, Server } from 'miragejs'

export default function route(server: Server){
  server.post("/api/medico", (s, r: Request) => {
    return {
      data: [
        true
      ]
    }
  })
}
