import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../CLASSES/user';
import { UserService } from '../../SERVICES/user.service';

@Component({
  selector: 'app-user',
  imports: [ReactiveFormsModule, CommonModule],
  template: `
  





  <div class="container border  container-forms">

  <form action="" [formGroup]="formUsers">
    <div class="row border">
      <div class="col-11">
        <h1>Formulário de Cadastro de Usuários</h1>



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
      <div class="col-1">
        <label for="id">ID</label>
        <input type="text" class="form-control" id="id" 
        placeholder="" formControlName="id" >
      </div>
      <div class="col-5">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" 
        placeholder="Digite seu nome" formControlName="nome" [ngStyle]="{'border': campoNome ? '1px solid red' : ''}" >
      </div>
      <div class="col-3">
        <label for="nascimento">Nascimento</label>
        <input type="date" class="form-control" id="nascimento" 
        placeholder="Digite sua data de nascimento" formControlName="nascimento" 
        [ngStyle]="{'border': campoNascimento ? '1px solid red' : ''}" >
      </div>
      <div class="col-3">
        <label for="cpf">Cpf</label>
        <input type="text" class="form-control" id="cpf" placeholder="Digite seu cpf" 
         formControlName="cpf" [ngStyle]="{'border': campoNome ? '1px solid red' : ''}" >
      </div>
    </div>
    <div class="row border">
      <h3>Endereço</h3>
      <div class="col-5">
        <label for="rua">Rua</label>
        <input type="text" class="form-control" id="rua" placeholder="Digite sua rua" 
         formControlName="rua"  [ngStyle]="{'border': campoRua ? '1px solid red' : ''}">
      </div>
      <div class="col-1">
        <label for="numero">Numero</label>
        <input type="text" class="form-control" id="numero" 
        placeholder="Digite seu numero" formControlName="numero" 
        [ngStyle]="{'border': campoNumero ? '1px solid red' : ''}" >
      </div>
      
      <div class="col-3">
        <label for="bairro">Bairro</label>
        <input type="text" class="form-control" id="bairro" 
         placeholder="Digite seu bairro" formControlName="bairro" 
         [ngStyle]="{'border': campoBairro ? '1px solid red' : ''}" >
      </div>
      <div class="col-3">
        <label for="cep">Cep</label>
        <input type="text" class="form-control" id="cep" 
         placeholder="Digite seu cep" formControlName="cep"
         [ngStyle]="{'border': campoCep ? '1px solid red' : ''}" >
      </div>
    </div>
    <div class="row border">
      <h3>Contato</h3>
      <div class="col-4">
        <label for="email">E-mail</label>
        <input type="text" class="form-control" id="email" 
        placeholder="Digite seu email" formControlName="email" 
        [ngStyle]="{'border': campoEmail ? '1px solid red' : ''}" >
      </div>
      <div class="col-3">
        <label for="telefone">Telefone</label>
        <input type="text" class="form-control" id="telefone"
         placeholder="Digite seu telefone" formControlName="telefone"
         [ngStyle]="{'border': campoTelefone ? '1px solid red' : ''}" >
      </div>
      <div class="col-3">
        <label for="celular">Celular</label>
        <input type="text" class="form-control" id="celular" 
         placeholder="Digite seu celular" formControlName="celular" 
         [ngStyle]="{'border': campoCelular ? '1px solid red' : ''}" >
      </div>
    </div>
    <div class="row border">
      <div class="col">
        <label for="senha">Senha</label>
        <input type="password" class="form-control" id="senha" 
         placeholder="Digite sua senha" formControlName="senha"
         [ngStyle]="{'border': campoSenha ? '1px solid red' : ''}" >
      </div>
    </div>
    <div class="row border">
      <div class="col">
        <label for="senha2">Senha</label>
        <input type="password" class="form-control" id="senha2" 
        placeholder="Digite sua senha" formControlName="senha2" 
        [ngStyle]="{'border': campoSenha2 ? '1px solid red' : ''}" >
      </div>
    </div>
   
    <div class="row m-3">
      <div class="col">
        <button class="btn btn-danger m-1 " (click)="formUsers.reset()">Cancelar</button>
        <button class="btn btn-primary m-1 " (click)="SalvarUsers()" >Salvar</button>
        <button class="btn btn-success m-1 " (click)="AlteraUser()">Alterar</button>
        <button class="btn btn-danger m-1 " (click)="DeletaUser()">Excluir</button>
        <button class="btn btn-warning m-1 " (click)="BuscaUser()">Buscar</button>
        
      </div>
    </div>

</form>


    
  </div>








  `,
  styleUrl: './user.component.css'
})
export class UserComponent {


  formUsers = new FormGroup({
    id: new FormControl(''),
    nome: new FormControl('', [Validators.required]),
    nascimento: new FormControl('', [Validators.required]),
    cpf: new FormControl('', [Validators.required]),
    rua: new FormControl('', [Validators.required]),
    numero: new FormControl('', [Validators.required]),
    bairro: new FormControl('', [Validators.required]),
    cep: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required]),
    celular: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    senha2: new FormControl('', [Validators.required]),

  });

  constructor(private serv : UserService){}


  listaUser:User[]=[];

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
  campoSenha:boolean = false;
  campoSenha2:boolean = false;



SalvarUsers() {
  if(this.formUsers.valid){
    this.listaUser.push(this.formUsers.value as User)
    this.serv.postUsers(this.formUsers.value as User).subscribe(res=>{
      console.log(res);
      
    })
    console.table(this.listaUser);
    console.log(this.formUsers.value);
    this.avisoSuccess = true;
     setTimeout(() => {
      this.avisoSuccess = false;
      this.formUsers.reset()
     }, 7000);

    }else{
      if(this.formUsers.value.nome == '')
        this.campoNome = true;
      if(this.formUsers.value.nascimento == '')
        this.campoNascimento = true;
      if(this.formUsers.value.cpf)
        this.campoCpf = true;
      if(this.formUsers.value.rua == '')
        this.campoRua = true;
      if(this.formUsers.value.numero == '')
        this.campoNumero = true;
      if(this.formUsers.value.bairro == '')
        this.campoBairro = true;
      if(this.formUsers.value.cep == '')
        this.campoCep = true;
      if(this.formUsers.value.email == '')
        this.campoEmail = true;
      if(this.formUsers.value.telefone == '')
        this.campoTelefone = true;
      if(this.formUsers.value.celular == '')
        this.campoCelular = true;
      if(this.formUsers.value.senha == '')
        this.campoSenha = true;
      if(this.formUsers.value.senha2 == '')
        this.campoSenha2 = true;
  }
}

BuscaUser(){
  if(this.formUsers.value.id == ''){
   this.avisoPesquisaFail = true;
   setTimeout(() => {
     this.avisoPesquisaFail = false;
   }, 5000);
 }else{
   this.serv.getUserById(this.formUsers.value.id!).subscribe(res=>{
     this.formUsers.patchValue(res)
   })
 }
}

AlteraUser(){
  if(this.formUsers.valid){
    this.serv.putUsers(this.formUsers.value as User).subscribe(res=>{
      console.log(res)
    })
    this.formUsers.reset()
  }
}

DeletaUser(){
  if(this.formUsers.value.id == ''){
    this.avisoPesquisaFail = true;
    setTimeout(() => {
      this.avisoPesquisaFail = false;
    }, 5000);
  }else{
    this.serv.deleteUsers(this.formUsers.value.id!).subscribe(res=>{
      console.log(res)
    })
    this.formUsers.reset()
  }

}



  closeForm() {
    window.location.reload()
  }

}
