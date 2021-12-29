import { Request, Server } from 'miragejs'

export default function route(server: Server){
  server.get("/api/consulta/futuras", (s, r: Request) => {
    return {
      data: [
        {
          id: 1,
          paciente: {
            id: 1,
            nome: 'José'
          },
          confirmado: true
        },
        {
          id: 3,
          paciente: {
            id: 11,
            nome: 'Adriana'
          },
          confirmado: true
        }
      ]
    }
  })
}
