import { Request, Response, Server } from 'miragejs'

export default function route(server: Server){
  server.get("/api/consulta", (s, r: Request) => {
    return new Response(200, {}, {});
  })
}
