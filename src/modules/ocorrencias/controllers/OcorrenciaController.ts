import { Request, Response } from "express";
import { CreateOcorrenciaService } from "../services/CreateOcorrenciaService";
import { ListOcorrenciasService } from "../services/ListOcorrenciasService";
import { UpdateOcorrenciaStatusService } from "../services/UpdateOcorrenciaStatusService";

export class OcorrenciaController {
  async create(request: Request, response: Response) {
    const { id_apartamento, titulo, descricao, gravidade } = request.body;
    const createService = new CreateOcorrenciaService();
    
    const ocorrencia = await createService.execute({
      id_apartamento: Number(id_apartamento),
      titulo,
      descricao,
      gravidade
    });
    
    return response.status(201).json(ocorrencia);
  }

  async list(request: Request, response: Response) {
    const { id_apartamento } = request.query;
    const listService = new ListOcorrenciasService();
    
    const ocorrencias = await listService.execute(
      id_apartamento ? Number(id_apartamento) : undefined
    );
    
    return response.status(200).json(ocorrencias);
  }

  async updateStatus(request: Request, response: Response) {
    const { id_ocorrencia } = request.params;
    const { status } = request.body;
    
    const updateService = new UpdateOcorrenciaStatusService();
    const ocorrencia = await updateService.execute({
      id_ocorrencia: Number(id_ocorrencia),
      status
    });
    
    return response.status(200).json(ocorrencia);
  }
}