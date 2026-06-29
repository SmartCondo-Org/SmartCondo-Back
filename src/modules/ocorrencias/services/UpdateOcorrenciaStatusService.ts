import { OcorrenciaRepository } from "../repositories/OcorrenciaRepository";
import { AppError } from "../../../shared/errors/AppError";
import { UpdateOcorrenciaStatusDTO } from "../dtos/OcorrenciaDTOs";

export class UpdateOcorrenciaStatusService {
  async execute({ id_ocorrencia, status }: UpdateOcorrenciaStatusDTO) {
    const ocorrenciaRepository = new OcorrenciaRepository();
    
    const ocorrenciaExists = await ocorrenciaRepository.findById(id_ocorrencia);
    if (!ocorrenciaExists) {
      throw new AppError("Ocorrência não encontrada.", 404);
    }

    return await ocorrenciaRepository.updateStatus(id_ocorrencia, status);
  }
}