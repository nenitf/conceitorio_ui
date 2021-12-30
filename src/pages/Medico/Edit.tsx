import { toast } from 'react-toastify';

import { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { findMedicoById, Medico, atualizaMedico } from 'apis/medicos'

import Form from './_form'

export default function Create() {
  const { id } = useParams();
  const [ medico, setMedico ] = useState<Medico>()

  useEffect(() => {
    if(!!id) {
      findMedicoById(parseInt(id))
        .then(resp => {
          if(!!resp.data) {
            setMedico(resp.data);
            toast.success("Médico atualizado")
          }
        })
        .catch(r => toast.error(r.response.data.error ?? "Erro interno"))
    }
  }, [id])

  function handleSubmit(m: Medico): Promise<void> {
    return new Promise<void>(function(resolve, reject) {
      if(!m.id) {
        reject();
        return;
      }

      atualizaMedico(m.id, m).then(resp => {
        toast.success("Médico atualizado");
        resolve();
      }).catch(r => {
        toast.error(r.response.data.error ?? "Erro interno");
        reject();
      });
    });
  }

  return (
    <>
      <Form medico={medico} handleSubmit={handleSubmit} />
    </>
  )
}
