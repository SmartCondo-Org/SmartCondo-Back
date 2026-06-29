import { prismaClient } from "../../../shared/database/prismaClient";
import { CreateOcorrenciaDTO } from "../dtos/OcorrenciaDTOs";

export class OcorrenciaRepository {
  async create(data: CreateOcorrenciaDTO & { status: string }) {
    return await prismaClient.ocorrencia.create({ data });
  }

  async findById(id_ocorrencia: number) {
    return await prismaClient.ocorrencia.findUnique({ where: { id_ocorrencia } });
  }

  async findAll() {
    return await prismaClient.ocorrencia.findMany({
      orderBy: { data_criacao: 'desc' },
      include: { apartamento: true }
    });
  }

  async findByApartamento(id_apartamento: number) {
    return await prismaClient.ocorrencia.findMany({
      where: { id_apartamento },
      orderBy: { data_criacao: 'desc' }
    });
  }

  async updateStatus(id_ocorrencia: number, status: string) {
    return await prismaClient.ocorrencia.update({
      where: { id_ocorrencia },
      data: { status }
    });
  }
}