import { useState, useEffect } from 'react'

import { Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaPlus, FaPencilAlt, FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';

import { Medico } from 'apis/medicos'

import { getMedicos } from 'apis/medicos';

export default function List() {
  const [ medicos, setMedicos ] = useState<Medico[]>([])
  let navigate = useNavigate();

  useEffect(() => {
    getMedicos()
      .then(resp => {
        setMedicos(resp.data);
      })
      .catch(r => toast.error(r.response.data.error ?? "Erro interno"))
  }, [])

  return (
    <>
      <Button className="mb-3" size="lg" variant="success"><FaPlus /></Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {medicos.map(m => (
            <tr className="align-middle" key={m.id}>
              <td className="col-md-10">{m.nome}</td>
              <td>
                <Button 
                  variant="warning"
                  onClick={() => navigate("/medico/"+m.id)}>
                  <FaPencilAlt />
                </Button>
                {' '}
                <Button 
                  variant="danger"
                  onClick={() => navigate("/medico/delete/"+m.id)}>
                  <FaTrash />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  )
}
