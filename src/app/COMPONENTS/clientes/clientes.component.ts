import { Component, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientesService } from '../../clientes/clientes.service';
import { Cliente } from '../../CLASSES/cliente';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-clientes',
  imports: [ReactiveFormsModule],
  template: `
  
  
  





  <div class="container border  container-forms">

  <form [formGroup]="formCliente">
    <div class="row border">
      <div class="col-11">
        <h1>Formulário de Cadastro Cliente</h1>
      </div>
      <div class="col-1">
      <button type="button" class="btn-close btn-close-dark" aria-label="Close" (click)="closeForm()"></button>
      </div>
      
    </div>
    
    <div class="row border">
      <h3>Dados Pessoais</h3>
      <div class="col-6">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" placeholder="Digite seu nome" 
        formControlName="nome">
      </div>
      <div class="col-3">
        <label for="nascimento">Nascimento</label>
        <input type="date" class="form-control" id="nascimento" placeholder="Digite sua data de nascimento" 
        formControlName="nascimento">
      </div>
      <div class="col-3">
        <label for="cpf">Cpf</label>
        <input type="text" class="form-control" id="cpf" placeholder="Digite seu cpf" 
        formControlName="cpf">
      </div>
    </div>
    <div class="row border">
      <h3>Endereço</h3>
      <div class="col-5">
        <label for="rua">Rua</label>
        <input type="text" class="form-control" id="rua" placeholder="Digite sua rua"
        formControlName="rua">
      </div>
      <div class="col-1">
        <label for="numero">Numero</label>
        <input type="text" class="form-control" id="numero" placeholder="Digite seu numero" 
        formControlName="numero">
      </div>
      
      <div class="col-3">
        <label for="bairro">Bairro</label>
        <input type="text" class="form-control" id="bairro" placeholder="Digite seu bairro"
        formControlName="bairro">
      </div>
      <div class="col-3">
        <label for="cep">Cep</label>
        <input type="text" class="form-control" id="cep" placeholder="Digite seu cep"
        formControlName="cep">
      </div>
    </div>
    <div class="row border">
      <h3>Contato</h3>
      <div class="col-4">
        <label for="email">E-mail</label>
        <input type="text" class="form-control" id="email" placeholder="Digite seu email"
        formControlName="email">
      </div>
      <div class="col-3">
        <label for="telefone">Telefone</label>
        <input type="text" class="form-control" id="telefone" placeholder="Digite seu telefone"
        formControlName="telefone">
      </div>
      <div class="col-3">
        <label for="celular">Celular</label>
        <input type="text" class="form-control" id="celular" placeholder="Digite seu celular"
        formControlName="celular">
      </div>
    </div>

    

    
   
   
    <div class="row m-3">
      <div class="col">
        <button class="btn btn-danger m-1 ">Cancelar</button>
        <button class="btn btn-warning m-1 ">Limpar</button>
        <button class="btn btn-primary m-1 " (click)="SalvarCliente()">Salvar</button>
        <button class="btn btn-success m-1 ">Alterar</button>
        <button class="btn btn-danger m-1 ">Excluir</button>
      </div>
    </div>
  
  
  
  </form>


  


    
  </div>









  `,
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

  constructor(private serv: HttpClient){}

  //apiBase:string = "https://my-json-server.typicode.com/Betho-Silva/bancosistemaangular/clientes"



  formCliente = new FormGroup({
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

  lista:Cliente[]=[]

  SalvarCliente(){

    if(this.formCliente.valid){
      this.lista.push(this.formCliente.value as Cliente);
      this.serv.post<Cliente>("http://localhost:3000/clientes",this.formCliente.value).subscribe(res=>{
        console.log(res)
      })

     
     console.table(this.lista)

      
    }


  }

closeForm(){
  window.location.reload()
}
}
