import { get } from "apis/httpclient";

export interface Paciente {
  id: number
  nome: string
}

export interface Consulta {
  id?: number
  paciente: Paciente
  confirmado: boolean
}

export interface ConsultasFuturasResp {
  data: Consulta[]
}

export function getConsultasFuturas(){
  return get("/api/consulta/futuras") as Promise<ConsultasFuturasResp>;
}
