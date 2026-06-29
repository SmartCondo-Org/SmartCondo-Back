import { FinanceiroRepository } from "../repositories/FinanceiroRepository";
import { AppError } from "../../../shared/errors/AppError";

export class ListTransacoesService {
  async execute(id_condominio: number) {
    if (!id_condominio) throw new AppError("O ID do condomínio é obrigatório.", 400);
    
    const financeiroRepository = new FinanceiroRepository();
    return await financeiroRepository.findAllByCondominio(id_condominio);
  }
}
