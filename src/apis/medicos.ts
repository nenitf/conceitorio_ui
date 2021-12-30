import { post } from "apis/httpclient";

export interface Horario {
  dia: string
  inicio: string
  fim: string
}

export interface Medico {
  id?: number
  nome: string
  horarios: Horario[]
}

export function salvaMedicoNovo(m: Medico){
  return post("/api/medico", m);
}
