export class Produtos {
  id:string = ''
    codigo: string = '';
  nome: string = "";
  preco: number = 0;
  categoria: string = "";
  descricao: string = "";

  constructor(id: string, nome: string, preco: number, categoria: string, descricao: string) {
    this.codigo = id;
    this.nome = nome;
    this.preco = preco;
    this.categoria = categoria;
    this.descricao = descricao;
  }
}
