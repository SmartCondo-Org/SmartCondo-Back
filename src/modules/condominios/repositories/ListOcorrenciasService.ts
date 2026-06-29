import { OcorrenciaRepository } from "../repositories/OcorrenciaRepository";

export class ListOcorrenciasService {
  async execute(id_apartamento?: number) {
    const ocorrenciaRepository = new OcorrenciaRepository();
    
    // Se passar o ID, filtra (Morador). Se não, lista tudo (Síndico).
    if (id_apartamento) {
      return await ocorrenciaRepository.findByApartamento(id_apartamento);
    }
    
    return await ocorrenciaRepository.findAll();
  }
}