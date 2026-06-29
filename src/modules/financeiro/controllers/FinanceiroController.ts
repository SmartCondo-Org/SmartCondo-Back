import { Request, Response } from "express";
import { CreateTransacaoService } from "../services/CreateTransacaoService";
import { ListTransacoesService } from "../services/ListTransacoesService";
import { PagarTransacaoService } from "../services/PagarTransacaoService";

export class FinanceiroController {
  async create(request: Request, response: Response) {
    const { id_condominio, id_apartamento, tipo, valor, descricao, data_vencimento } = request.body;
    const createService = new CreateTransacaoService();
    
    const transacao = await createService.execute({
      id_condominio: Number(id_condominio),
      id_apartamento: id_apartamento ? Number(id_apartamento) : undefined,
      tipo,
      valor: Number(valor),
      descricao,
      data_vencimento
    });
    
    return response.status(201).json(transacao);
  }

  async list(request: Request, response: Response) {
    const { id_condominio } = request.query;
    const listService = new ListTransacoesService();
    
    const transacoes = await listService.execute(Number(id_condominio));
    return response.status(200).json(transacoes);
  }

  async pagar(request: Request, response: Response) {
    const { id_transacao } = request.params;
    const pagarService = new PagarTransacaoService();
    
    const transacao = await pagarService.execute(Number(id_transacao));
    return response.status(200).json(transacao);
  }
}