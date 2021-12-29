import { useState } from 'react'
import { Form, Button } from 'react-bootstrap';

export default function Create() {
  const [ data, setData ] = useState('')
  const [ medico, setMedico ] = useState('')

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Data</Form.Label>
          <Form.Control type="date" placeholder="Data" value={data} onChange={e => setData(e.target.value)} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Médico</Form.Label>
          <Form.Select
            onChange={e => setMedico(e.target.value)}
            defaultValue=""
          >
            <option value="">
              Escolha
            </option>
            <option value="1">
              Medico 1
            </option>
            <option value="2">
              Medico 2
            </option>
          </Form.Select>
        </Form.Group>
        <Button variant="primary" onClick={() => console.log({data, medico})}>
          Cadastrar consulta
        </Button>
      </Form>
    </>
  )
}
