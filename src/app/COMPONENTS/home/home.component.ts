import { Component } from '@angular/core';
import { UserComponent } from "../user/user.component";
import { ClientesComponent } from "../clientes/clientes.component";
import { ProdutosComponent } from "../produtos/produtos.component";

@Component({
  selector: 'app-home',
  imports: [UserComponent, ClientesComponent, ProdutosComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  form: string = '';

  openForm(form: string) {
    this.form = form;
  }
}
