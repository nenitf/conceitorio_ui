import { useState, useEffect } from 'react'
import { getConsultasFuturas, Consulta } from 'apis/consultas';

export default function Dashboard() {
  const [ consultas, setConsultas ] = useState<Consulta[]>([])

  useEffect(() => {
    getConsultasFuturas()
      .then(resp => {
        setConsultas(resp.data);
      })
      .catch(err => {
        console.log({err})
      });
  }, [])

  return (
    <>
      <ul aria-label="Próximas consultas">
        {consultas.map(c => (
          <li key={c.id}><a href={`/consulta/${c.id}`}>{c.paciente.nome}</a></li>
        ))}
      </ul>
    </>
  )
}
