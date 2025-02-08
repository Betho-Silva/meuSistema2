import { Component } from '@angular/core';

@Component({
  selector: 'app-produtos',
  imports: [],
  template: `
    
  
  





  <div class="container border  container-forms">
    <div class="row border">
      <div class="col-12">
        <h1>Formulário de Cadastro de Produtos</h1>
      </div>
    </div>
    <div class="row border">
      <h3>Dados do Produto</h3>
      <div class="col-6">
        <label for="codigo">Codigo</label>
        <input type="text" class="form-control w-50" id="codigo" placeholder="">
      </div>
      <div class="col-6">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" placeholder="">
      </div>
      <div class="col-3">
        <label for="preco">Preço</label>
        <input type="text" class="form-control" id="preco" placeholder="">
      </div>
    </div>
    <div class="row border">
      <div class="col-7">
        <label for="categoria">Categoria</label>
        <select name="categoria" id="categoria" class="form-select">
          <option value="default" selected disabled>Selecione uma categoria</option>
          <option value="informatica">Informática</option>
          <option value="eletronicos">Eletrônicos</option>
          <option value="roupas">roupas</option>
          <option value="alimentos">Alimentos</option>
          <option value="livros">Livros</option>
          <option value="outros">Outros</option>
        </select>
      </div>
    <div class="row border">
      <div class="col-10">
        <label for="descricao">Descrição</label>
        <textarea class="form-control" id="descricao" rows="3"></textarea>
      </div>
    </div>
   
   
    <div class="row m-3">
      <div class="col">
        <button class="btn btn-danger m-1 ">Cancelar</button>
        <button class="btn btn-warning m-1 ">Limpar</button>
        <button class="btn btn-primary m-1 ">Salvar</button>
        <button class="btn btn-success m-1 ">Alterar</button>
        <button class="btn btn-danger m-1 ">Excluir</button>
      </div>
      </div>
    </div>


    
  </div>








  `,
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {

}
