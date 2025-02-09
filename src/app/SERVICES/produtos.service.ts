import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produtos } from '../CLASSES/produtos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

    //apiBase:string = "https://my-json-server.typicode.com/Betho-Silva/bancosistemaangular/clientes"
  ///apiBase:string = "http://localhost:3000/clientes"
  apiBase:string = "https://67a8dd476e9548e44fc2418c.mockapi.io/sistema2/produtos"




  getAllProdutos(){
    return this.http.get<Produtos>(this.apiBase)
  }
  
  getProdutoById(id:string){
    return this.http.get<Produtos>(`${this.apiBase}/${id}`)
  }

  postProduto(produto:Produtos):Observable<Produtos>{
    return this.http.post<Produtos>(this.apiBase, produto)
  }

  putProduto(produto:Produtos){
    return this.http.put<Produtos>(`${this.apiBase}/${produto.codigo}`, produto)
  }

  deleteProduto(codigo:string){
    return this.http.delete<Produtos>(`${this.apiBase}/${codigo}`)
  }


}
