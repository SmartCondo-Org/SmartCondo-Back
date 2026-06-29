import { FinanceiroRepository } from "../repositories/FinanceiroRepository";
import { AppError } from "../../../shared/errors/AppError";

export class PagarTransacaoService {
  async execute(id_transacao: number) {
    const financeiroRepository = new FinanceiroRepository();
    
    const transacao = await financeiroRepository.findById(id_transacao);
    if (!transacao) throw new AppError("Transação não encontrada.", 404);
    
    if (transacao.status_pagamento === "Pago") {
      throw new AppError("Esta transação já foi paga.", 400);
    }

    return await financeiroRepository.marcarComoPago(id_transacao);
  }
}