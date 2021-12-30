import { useState } from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';
import { FaPlus, FaMinus } from 'react-icons/fa';

import { Horario, salvaMedicoNovo } from 'apis/medicos';

export default function Create() {
  const [ nome, setNome ] = useState('')
  const [ horarios, setHorarios ] = useState<Horario[]>([])

  function handleChangeInicio(v: string, i: number) {
    const list = [...horarios];
    list[i].inicio = v;
    setHorarios(list);
  }

  function handleChangeFim(v: string, i: number) {
    const list = [...horarios];
    list[i].fim = v;
    setHorarios(list);
  }

  function handleChangeDia(v: string, i: number) {
    const list = [...horarios];
    list[i].dia = v;
    setHorarios(list);
  };

  function handleAddIntervalo() {
    setHorarios([
      ...horarios, 
      {
        dia: '1',
        inicio: "00:00",
        fim: "",
      }
    ])
  }

  function handleDeleteRow(i: number) {
    const list = [...horarios];
    list.splice(i, 1);
    setHorarios(list);
  }

  return (
    <>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nome"
            value={nome}
            onChange={e => setNome(e.target.value)} />
        </Form.Group>
        {horarios.map((intervalo, i) => (
          <Row className="g-2" key={i}>
            <Col>
              <Form.Group className="mb-3">
                <Form.Select
                  defaultValue={intervalo.dia}
                  onChange={e => handleChangeDia(e.target.value, i)}
                >
                  <option value="">
                    Escolha
                  </option>
                  <option value="1">
                    Segunda
                  </option>
                  <option value="2">
                    Terça
                  </option>
                  <option value="3">
                    Quarta
                  </option>
                  <option value="4">
                    Quinta
                  </option>
                  <option value="5">
                    Sexta
                  </option>
                  <option value="6">
                    Sábado
                  </option>
                  <option value="7">
                    Domingo
                  </option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder="Horário inicial"
                  value={horarios[i].inicio}
                  onChange={e => handleChangeInicio(e.target.value, i)}
                  type="time" />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3">
                <Form.Control
                  placeholder="Horário final"
                  value={horarios[i].fim}
                  onBlur={e => handleChangeFim(e.target.value, i)}
                  type="time" />
              </Form.Group>
            </Col>
            <Col xs="auto">
              <Button
                variant="primary"
                onClick={e => handleDeleteRow(i)}>
                <FaMinus />
              </Button>
            </Col>
          </Row>
        ))}
        <Form.Group className="mb-3">
          <Button
            variant="primary"
            onClick={handleAddIntervalo}>
            <FaPlus />
          </Button>
        </Form.Group>
        <Button variant="primary" onClick={() => salvaMedicoNovo({nome, horarios})}>
          Cadastrar consulta
        </Button>
      </Form>
    </>
  )
}
