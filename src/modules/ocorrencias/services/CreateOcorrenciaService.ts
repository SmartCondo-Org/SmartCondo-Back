import { OcorrenciaRepository } from "../repositories/OcorrenciaRepository";
import { prismaClient } from "../../../shared/database/prismaClient";
import { AppError } from "../../../shared/errors/AppError";
import { CreateOcorrenciaDTO } from "../dtos/OcorrenciaDTOs";

export class CreateOcorrenciaService {
  async execute({ id_apartamento, titulo, descricao, gravidade }: CreateOcorrenciaDTO) {
    const ocorrenciaRepository = new OcorrenciaRepository();
    
    const apartamentoExists = await prismaClient.apartamento.findUnique({
      where: { id_apartamento }
    });

    if (!apartamentoExists) {
      throw new AppError("Apartamento não encontrado.", 404);
    }

    return await ocorrenciaRepository.create({
      id_apartamento,
      titulo,
      descricao,
      gravidade,
      status: "Aberta"
    });
  }
}