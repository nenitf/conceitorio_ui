import { Request, Server, Response } from 'miragejs'

import { Medico } from 'apis/medicos';

export default function route(server: Server){
  server.post("/api/medico", (s, r: Request) => {
    const body = JSON.parse(r.requestBody);

    const medicosAtuais = JSON.parse(
      localStorage.getItem('@conceitorio:dev:medicos') ?? '[]'
    );
    const lastId = medicosAtuais.length + 1;

    const medico = {
      id: body.id ?? lastId,
      nome: body.nome ?? "sem nome",
      horarios: body.horarios ?? [],
    };

    const medicosRestantes = medicosAtuais.filter((m: Medico) => m.id !== medico.id);
    const medicos = [...medicosRestantes, medico];

    localStorage.setItem('@conceitorio:dev:medicos', JSON.stringify(medicos));
    return { data: [ medico ] };
  });

  server.put("/api/medico/:id", (s, r: Request) => {
    const id = parseInt(r.params.id)
    const body = JSON.parse(r.requestBody);

    const medicosAtuais = JSON.parse(
      localStorage.getItem('@conceitorio:dev:medicos') ?? '[]'
    );

    console.log(!body.nome)
    console.log(':DankDebug:medicos:155648')
    if(!body.nome || !body.horarios) {
        return new Response(400, {}, {error: "Faltam campos obrigatórios"});
    }

    const medico = {
      id,
      nome: body.nome,
      horarios: body.horarios,
    };

    const medicosRestantes = medicosAtuais.filter((m: Medico) => m.id !== medico.id);
    const medicos = [...medicosRestantes, medico];

    localStorage.setItem('@conceitorio:dev:medicos', JSON.stringify(medicos));
    return { data: medico };
  });

  server.get("/api/medico", (s, r: Request) => {
    return {
      data: JSON.parse(
        localStorage.getItem('@conceitorio:dev:medicos') ?? '[]'
      )
    };
  });

  server.get("/api/medico/:id", (s, r: Request) => {
    const id = parseInt(r.params.id)

    const medicos = JSON.parse(
      localStorage.getItem('@conceitorio:dev:medicos') ?? '[]'
    );

    const medico = medicos.find((m: Medico) => m.id === id) ?? null;

    return {
      data: medico
    };
  });
}
