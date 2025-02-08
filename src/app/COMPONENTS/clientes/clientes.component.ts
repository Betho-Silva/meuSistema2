import { Component, output } from '@angular/core';

@Component({
  selector: 'app-clientes',
  imports: [],
  template: `
  
  
  





  <div class="container border  container-forms">
    <div class="row border">
      <div class="col-11">
        <h1>Formulário de Cadastro de Clientes</h1>
      </div>
      <div class="col-1">
      <button type="button" class="btn-close btn-close-dark" aria-label="Close" (click)="closeForm()"></button>
      </div>
      
    </div>
    <div class="row border">
      <h3>Dados Pessoais</h3>
      <div class="col-6">
        <label for="nome">Nome</label>
        <input type="text" class="form-control" id="nome" placeholder="Digite seu nome">
      </div>
      <div class="col-3">
        <label for="nascimento">Nascimento</label>
        <input type="date" class="form-control" id="nascimento" placeholder="Digite sua data de nascimento">
      </div>
      <div class="col-3">
        <label for="cpf">Cpf</label>
        <input type="text" class="form-control" id="cpf" placeholder="Digite seu cpf">
      </div>
    </div>
    <div class="row border">
      <h3>Endereço</h3>
      <div class="col-5">
        <label for="rua">Rua</label>
        <input type="text" class="form-control" id="rua" placeholder="Digite sua rua">
      </div>
      <div class="col-1">
        <label for="numero">Numero</label>
        <input type="text" class="form-control" id="numero" placeholder="Digite seu numero">
      </div>
      
      <div class="col-3">
        <label for="bairro">Bairro</label>
        <input type="text" class="form-control" id="bairro" placeholder="Digite seu bairro">
      </div>
      <div class="col-3">
        <label for="cep">Cep</label>
        <input type="text" class="form-control" id="cep" placeholder="Digite seu cep">
      </div>
    </div>
    <div class="row border">
      <h3>Contato</h3>
      <div class="col-4">
        <label for="email">E-mail</label>
        <input type="text" class="form-control" id="email" placeholder="Digite seu email">
      </div>
      <div class="col-3">
        <label for="telefone">Telefone</label>
        <input type="text" class="form-control" id="telefone" placeholder="Digite seu telefone">
      </div>
      <div class="col-3">
        <label for="celular">Celular</label>
        <input type="text" class="form-control" id="celular" placeholder="Digite seu celular">
      </div>
    </div>
   
   
    <div class="row m-3">
      <div class="col">
        <button class="btn btn-danger m-1 ">Cancelar</button>
        <button class="btn btn-warning m-1 ">Limpar</button>
        <button class="btn btn-primary m-1 ">Salvar</button>
      </div>
    </div>


    
  </div>









  `,
  styleUrl: './clientes.component.css'
})
export class ClientesComponent {

closeForm(){
  window.location.reload()
}
}
