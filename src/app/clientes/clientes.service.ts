import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cliente } from '../CLASSES/cliente';



@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }


  //apiBase:string = "https://my-json-server.typicode.com/Betho-Silva/bancosistemaangular/clientes"
  apiBase:string = "http://localhost:3000/clientes"



  getAllClientes(){
    return this.http.get<Cliente>(this.apiBase)
  }
  
  getClienteById(id:number){
    return this.http.get<Cliente>(`${this.apiBase}/${id}`)
  }

  postClientes(cliente:any){
    return this.http.post<Cliente>(this.apiBase, cliente)
  }

  putClientes(cliente:any){
    return this.http.put<Cliente>(`${this.apiBase}/${cliente.id}`, cliente)
  }

  deleteClientes(id:number){
    return this.http.delete<Cliente>(`${this.apiBase}/${id}`)
  }


}
