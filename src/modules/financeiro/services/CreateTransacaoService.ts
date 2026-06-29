import { FinanceiroRepository } from "../repositories/FinanceiroRepository";
import { prismaClient } from "../../../shared/database/prismaClient";
import { AppError } from "../../../shared/errors/AppError";
import { CreateTransacaoDTO } from "../dtos/FinanceiroDTOs";

export class CreateTransacaoService {
  async execute({ id_condominio, id_apartamento, tipo, valor, descricao, data_vencimento }: CreateTransacaoDTO) {
    const financeiroRepository = new FinanceiroRepository();
    
    const condominioExists = await prismaClient.condominio.findUnique({ where: { id_condominio } });
    if (!condominioExists) throw new AppError("Condomínio não encontrado.", 404);

    if (id_apartamento) {
      const apartamentoExists = await prismaClient.apartamento.findUnique({ where: { id_apartamento } });
      if (!apartamentoExists) throw new AppError("Apartamento não encontrado.", 404);
    }

    if (tipo !== "Receita" && tipo !== "Despesa") {
      throw new AppError("O tipo de transação deve ser 'Receita' ou 'Despesa'.", 400);
    }

    return await financeiroRepository.create({
      id_condominio,
      id_apartamento,
      tipo,
      valor,
      descricao,
      data_vencimento: new Date(data_vencimento),
      status_pagamento: "Pendente"
    });
  }
}
