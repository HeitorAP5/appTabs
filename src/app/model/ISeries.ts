export interface ISeries{
    nome: string;
    lancamento: string;
    temporadas: string;
    classificacao: number;
    cartaz: string;
    generos: string[];
    pagina?: string; //? indica que o campo é opcional
    favorito: boolean;
  }
