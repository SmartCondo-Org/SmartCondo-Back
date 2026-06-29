export interface CreateTransacaoDTO {
  id_condominio: number;
  id_apartamento?: number;
  tipo: string;
  valor: number;
  descricao: string;
  data_vencimento: string | Date;
}
