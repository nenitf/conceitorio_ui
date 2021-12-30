import { get, post, put } from "apis/httpclient";

export interface Horario {
  dia: string
  inicio: string
  fim: string
}

export interface Medico {
  id?: number|null
  nome: string
  horarios: Horario[]
}

export function salvaMedicoNovo(m: Medico) {
  return post("/api/medico", m);
}

export function atualizaMedico(id: number, m: Medico) {
  return put(`/api/medico/${id}`, m);
}

export interface MedicosResp {
  data: Medico[]
}

export interface MedicoResp {
  data: Medico | null
}

export function getMedicos() {
  return get("/api/medico") as Promise<MedicosResp>;
}

export function findMedicoById(id: number) {
  return get(`/api/medico/${id}`) as Promise<MedicoResp>;
}
