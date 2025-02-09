import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientesService } from '../../SERVICES/clientes.service';
import { Cliente } from '../../CLASSES/cliente';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-clientes',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  
  
  





  <div class="container border  container-forms">

  <form [formGroup]="formCliente">
    <div class="row border">
      <div class="col-11">
        <h1>Formulário de Cadastro Cliente</h1>
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
      <h3>Dados Pessoais</h3>
      <div class="col-2">
       
        <label for="id">Código/id</label>        
        <input type="text" class="form-control" id="id" placeholder="" 
        formControlName="id">
      </div>
      <div class="col-6">
       
        <label for="nome">Nome</label>        
        <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" 
        formControlName="nome" [ngStyle]="{'border': campoNome ? '1px solid red' : ''}">
      </div>
      <div class="col-2">
        
        <label for="nascimento">Nascimento</label>
        <input type="date" class="form-control" id="nascimento" placeholder="Digite sua data de nascimento" 
        formControlName="nascimento" [ngStyle]="{'border': campoNascimento ? '1px solid red' : ''}">
      </div>
      <div class="col-2">
        <label for="cpf">Cpf</label>
        <input type="text" class="form-control" id="cpf" placeholder="Digite seu cpf" 
        formControlName="cpf" [ngStyle]="{'border':campoCpf ? '1px solid red' : ''}">
      </div>
    </div>
    <div class="row border">
      <h3>Endereço</h3>
      <div class="col-5">
        <label for="rua">Rua</label>
        <input type="text" class="form-control" id="rua" placeholder="Digite sua rua"
        formControlName="rua" [ngStyle]="{'border':campoRua ? '1px solid red' : ''}">
      </div>
      <div class="col-1">
        <label for="numero">Numero</label>
        <input type="text" class="form-control" id="numero" placeholder="numero" 
        formControlName="numero" [ngStyle]="{'border': campoNumero ? '1px solid red' : ''}">
      </div>
      
      <div class="col-3">
        <label for="bairro">Bairro</label>
        <input type="text" class="form-control" id="bairro" placeholder="Digite seu bairro"
        formControlName="bairro"  [ngStyle]="{'border': campoBairro ? '1px solid red' : ''}">
      </div>
      <div class="col-3">
        <label for="cep">Cep</label>
        <input type="text" class="form-control" id="cep" placeholder="Digite seu cep"
        formControlName="cep"   [ngStyle]="{'border': campoCep ? '1px solid red' : ''}">
      </div>
    </div>
    <div class="row border">
      <h3>Contato</h3>
      <div class="col-4">
        <label for="email">E-mail</label>
        <input type="text" class="form-control" id="email" placeholder="Digite seu email"
        formControlName="email"  [ngStyle]="{'border': campoEmail ? '1px solid red' : ''}">
      </div>
      <div class="col-3">
        <label for="telefone">Telefone</label>
        <input type="text" class="form-control" id="telefone" placeholder="Digite seu telefone"
        formControlName="telefone"  [ngStyle]="{'border': campoTelefone ? '1px solid red' : ''}">
      </div>
      <div class="col-3">
        <label for="celular">Celular</label>
        <input type="text" class="form-control" id="celular" placeholder="Digite seu celular"
        formControlName="celular"  [ngStyle]="{'border': campoCelular ? '1px solid red' : ''}">
      </div>
    </div>

    

    
   
   
    <div class="row m-3">
      <div class="col">
        <button class="btn btn-danger m-1 " (click)=formCliente.reset()>Cancelar</button>
        <button class="btn btn-warning m-1 " (click)="BuscaCliente()">Pesquisar</button>
        <button class="btn btn-primary m-1 " (click)="SalvarCliente()">Salvar</button>
        <button class="btn btn-success m-1 " (click)="AlterarCliente()">Alterar</button>
        <button class="btn btn-danger m-1 " (click)="DeletarCliente()">Excluir</button>
      </div>
    </div>
  
  
  
  </form>


  


    
  </div>









  `,
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {
 

  constructor(private serv: ClientesService){}

  //apiBase:string = "https://my-json-server.typicode.com/Betho-Silva/bancosistemaangular/clientes"



  formCliente = new FormGroup({
    id : new FormControl(''),
    nome: new FormControl('',Validators.required),
    nascimento: new FormControl('',Validators.required),
    cpf: new FormControl('',Validators.required),
    rua: new FormControl('',Validators.required),
    telefone: new FormControl('',Validators.required),
    celular: new FormControl('',Validators.required),
    numero: new FormControl('',Validators.required),
    bairro: new FormControl('',Validators.required),
    cep: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
  });

  lista:Cliente[]=[];
  avisoPesquisaFail:boolean = false;
  avisoFail:boolean = false;
  avisoSuccess:boolean = false;
  campoNome:boolean = false;
  campoNascimento:boolean = false;
  campoCpf:boolean = false;
  campoRua:boolean = false;
  campoTelefone:boolean = false;
  campoCelular:boolean = false;
  campoNumero:boolean = false;
  campoBairro:boolean = false;
  campoCep:boolean = false;
  campoEmail:boolean = false;


  SalvarCliente(){

    if(this.formCliente.valid){
      this.lista.push(this.formCliente.value as Cliente);
      this.serv.postClientes(this.formCliente.value as Cliente).subscribe(res=>{
        console.log(res)
      })     
     console.table(this.lista);
     console.log(this.formCliente.value)  
     this.avisoSuccess = true;
     setTimeout(() => {
      this.avisoSuccess = false;
      this.formCliente.reset()
     }, 7000);
     
    }else{
      if(this.formCliente.value.nome == '')
      this.campoNome = true;
      if(this.formCliente.value.nascimento == '')
      this.campoNascimento = true;
      if(this.formCliente.value.cpf == '')
      this.campoCpf = true;
      if(this.formCliente.value.rua == '')
      this.campoRua = true;
      if(this.formCliente.value.telefone == '')
      this.campoTelefone =  true;
      if(this.formCliente.value.celular == '')
      this.campoCelular = true;
      if(this.formCliente.value.numero == '')
      this.campoNumero = true;
      if(this.formCliente.value.bairro == '')
      this.campoBairro = true;
      if(this.formCliente.value.cep == '')
      this.campoCep = true;
      if(this.formCliente.value.email == '')
      this.campoEmail = true;
      this.avisoFail = true;
      setTimeout(() => {
        this.avisoFail = false;
        this.campoNome = false;
        this.campoNascimento = false;
        this.campoCpf = false;
        this.campoRua = false;
        this.campoTelefone = false;
        this.campoCelular = false;
        this.campoNumero = false;
        this.campoBairro = false;
        this.campoCep = false;
        this.campoEmail = false;
      }, 5000);      
    }
  }


  BuscaCliente(){
   if(this.formCliente.value.id == ''){
    this.avisoPesquisaFail = true;
    setTimeout(() => {
      this.avisoPesquisaFail = false;
    }, 5000);
  }else{
    this.serv.getClienteById(this.formCliente.value.id!).subscribe(res=>{
      this.formCliente.patchValue(res)
    })
  }
}

DeletarCliente(){
  if(this.formCliente.value.id == ''){
    this.avisoPesquisaFail = true;
    setTimeout(() => {
      this.avisoPesquisaFail = false;
    }, 5000);
  }else{
    this.serv.deleteClientes(this.formCliente.value.id!).subscribe(res=>{
      console.log(res)
    })
    this.formCliente.reset()
  }

}

AlterarCliente(){
  if(this.formCliente.valid){
    this.serv.putClientes(this.formCliente.value as Cliente).subscribe(res=>{
      console.log(res)
    })
    this.formCliente.reset()
  }
}


closeForm(){
  window.location.reload()
}
}
