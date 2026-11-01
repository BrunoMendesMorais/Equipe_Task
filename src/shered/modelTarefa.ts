export interface Tarefa {
  id: number;
  titulo: string;
  status: 'Em atraso' | 'Aberto' | 'Fechado';
  descricao: string;
  dataAbertura: string;
  dataFechamento: string | null;
  responsavelId: number;
  responsavel: string;
}

