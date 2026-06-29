import { prismaClient } from "../../../shared/database/prismaClient";
import { CreateTransacaoDTO } from "../dtos/FinanceiroDTOs";

export class FinanceiroRepository {
  async create(data: CreateTransacaoDTO & { status_pagamento: string }) {
    return await prismaClient.transacao.create({ data });
  }

  async findAllByCondominio(id_condominio: number) {
    return await prismaClient.transacao.findMany({
      where: { id_condominio },
      orderBy: { data_vencimento: 'desc' }
    });
  }

  async findById(id_transacao: number) {
    return await prismaClient.transacao.findUnique({ where: { id_transacao } });
  }

  async marcarComoPago(id_transacao: number) {
    return await prismaClient.transacao.update({
      where: { id_transacao },
      data: {
        status_pagamento: "Pago",
        data_pagamento: new Date()
      }
    });
  }
}
