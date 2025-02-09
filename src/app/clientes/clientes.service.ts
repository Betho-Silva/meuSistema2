import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../CLASSES/cliente';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }


  //apiBase:string = "https://my-json-server.typicode.com/Betho-Silva/bancosistemaangular/clientes"
  ///apiBase:string = "http://localhost:3000/clientes"
  apiBase:string = "https://67a8dd476e9548e44fc2418c.mockapi.io/sistema2/clientes"



  getAllClientes(){
    return this.http.get<Cliente>(this.apiBase)
  }
  
  getClienteById(id:string){
    return this.http.get<Cliente>(`${this.apiBase}/${id}`)
  }

  postClientes(cliente:Cliente):Observable<Cliente>{
    return this.http.post<Cliente>(this.apiBase, cliente)
  }

  putClientes(cliente:Cliente){
    return this.http.put<Cliente>(`${this.apiBase}/${cliente.id}`, cliente)
  }

  deleteClientes(id:string){
    return this.http.delete<Cliente>(`${this.apiBase}/${id}`)
  }


}
