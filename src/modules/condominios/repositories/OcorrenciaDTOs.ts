export interface CreateOcorrenciaDTO {
  id_apartamento: number;
  titulo: string;
  descricao: string;
  gravidade: string; // 'Alta', 'Media', 'Baixa'
}

export interface UpdateOcorrenciaStatusDTO {
  id_ocorrencia: number;
  status: string; // 'Resolvida', 'Em_Analise', 'Aberta'
}