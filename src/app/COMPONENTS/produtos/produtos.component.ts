import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { Produtos } from '../../CLASSES/produtos';
import { ProdutosService } from '../../SERVICES/produtos.service';

@Component({
  selector: 'app-produtos',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    
  
  





  <div class="container border  container-forms">
    <form [formGroup]="formProdutos">
    
    <div class="row border">
      <div class="col-11">
        <h1>Formulário de Cadastro de Produtos</h1>

        @if(avisoFail){
            <p class="alert alert-danger">* Existem campos obrigatórios</p>
        }
        @if(avisoSuccess){
            <p class="alert alert-success">Cliente cadastrado com sucesso</p>
        }
        @if(avisoPesquisaFail){
            <p class="alert alert-danger">Dados não encontrados</p>

        }
      </div>
      <div class="col-1">
      <button type="button" class="btn-close btn-close-dark" aria-label="Close" (click)="closeForm()"></button>
      </div>
    </div>
    <div class="row border">
      <h3>Dados do Produto</h3>
      <div class="col-6">
        <label for="codigo">Codigo</label>
        <input type="text" class="form-control w-50" id="codigo" placeholder="" formControlName="codigo">
      </div>
      <div class="col-6">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" placeholder="" formControlName="nome" >
      </div>
      <div class="col-3">
        <label for="preco">Preço</label>
        <input type="text" class="form-control" id="preco" placeholder="" formControlName="preco">
      </div>
    </div>
    <div class="row border">
      <div class="col-7">
        <label for="categoria">Categoria</label>
        <select name="categoria" id="categoria" class="form-select" formControlName="categoria">
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
        <textarea class="form-control" id="descricao" rows="3" formControlName="descricao"></textarea>
      </div>
    </div>
   
   
    <div class="row m-3">
      <div class="col">
        <button class="btn btn-danger m-1 " (click)="formProdutos.reset()">Cancelar</button>
        <button class="btn btn-primary m-1 " (click)="SalvarProdutos()">Salvar</button>
        <button class="btn btn-success m-1 " (click)="AlterarProdutos()">Alterar</button>
        <button class="btn btn-danger m-1 " (click)="DeletarProdutos()">Excluir</button>
        <button class="btn btn-primary m-1 " (click)="BuscaProdutos()">Buscar</button>
      </div>
      </div>
    </div>

    </form>


    
  </div>








  `,
  styleUrl: './produtos.component.css'
})
export class ProdutosComponent {


  formProdutos = new FormGroup({
    codigo: new FormControl(''),
    nome: new FormControl('',Validators.required),
    preco: new FormControl(0,Validators.required),
    categoria: new FormControl('',Validators.required),
    descricao: new FormControl('',Validators.required)
  });


  avisoPesquisaFail:boolean = false;
  avisoFail:boolean = false;
  avisoSuccess:boolean = false;
  campoNome:boolean = false;
  campoPreco:boolean = false;
  campoCategoria:boolean = false;
  campoDescricao:boolean = false;
  


  constructor(private serv : ProdutosService){}

  listaProd:Produtos[]=[];

  SalvarProdutos(){

    if(this.formProdutos.valid){
      this.listaProd.push(this.formProdutos.value as Produtos);
      this.serv.postProduto(this.formProdutos.value as Produtos).subscribe(res=>{
        console.log(res)
      })
      
      console.table(this.listaProd);
      console.log(this.formProdutos.value)
      this.avisoSuccess = true;
      setTimeout(() => {
       this.avisoSuccess = false;
       this.formProdutos.reset()
      }, 7000);
    }else{
      if(this.formProdutos.value.nome == '')
        this.campoNome = true;
        if(this.formProdutos.value.preco == 0)
        this.campoPreco = true;
        if(this.formProdutos.value.categoria == '')
        this.campoCategoria = true;
        if(this.formProdutos.value.descricao == '')
        this.campoDescricao = true;
        this.avisoFail = true;
        setTimeout(() => {
          this.avisoFail = false;
          this.campoNome = false;
          this.campoPreco = false;
          this.campoCategoria = false;
          this.campoDescricao = false;
        }, 5000);
    }
  }

  BuscaProdutos(){
    if(this.formProdutos.value.codigo == ''){
      this.avisoPesquisaFail = true;
      setTimeout(() => {
        this.avisoPesquisaFail = false;
      }, 5000);
    }else{
      this.serv.getProdutoById(this.formProdutos.value.codigo!).subscribe(res=>{
        this.formProdutos.patchValue(res)
      })
    }  
  }

  DeletarProdutos(){
    if(this.formProdutos.value.codigo == ''){
      this.avisoPesquisaFail = true;
      setTimeout(() => {
        this.avisoPesquisaFail = false;
      }, 5000);
    }else{
      this.serv.deleteProduto(this.formProdutos.value.codigo!).subscribe(res=>{
        console.log(res)
      })
      this.formProdutos.reset()
    }
  
  }


  AlterarProdutos(){
    if(this.formProdutos.valid){
      this.serv.putProduto(this.formProdutos.value as Produtos).subscribe(res=>{
        console.log(res)
      })
      this.formProdutos.reset()
    }
  }



  closeForm(){
    window.location.reload()
  }

}
