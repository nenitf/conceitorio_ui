import Form from './_form'

import { toast } from 'react-toastify';

import { Medico, salvaMedicoNovo } from 'apis/medicos';

export default function Create() {
  function handleSubmit(m: Medico): Promise<void> {
    return new Promise<void>(function(resolve, reject) {
      salvaMedicoNovo(m).then(resp => {
        toast.success("Médico criado");
        resolve()
      }).catch(r => {
        toast.error(r.response.data.error ?? "Erro interno");
        reject();
      });

    });
  }

  return (
    <>
      <Form handleSubmit={handleSubmit} />
    </>
  )
}
