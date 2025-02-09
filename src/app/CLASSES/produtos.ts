export class Produtos {
    codigo: string = '';
  nome: string = "";
  preco: number = 0;
  categoria: string = "";
  descricao: string = "";

  constructor(codigo: string, nome: string, preco: number, categoria: string, descricao: string) {
    this.codigo = codigo;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
  }
}
