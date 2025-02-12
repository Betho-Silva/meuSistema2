import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../CLASSES/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { }


  //apiBase:string = "https://my-json-server.typicode.com/Betho-Silva/bancosistemaangular/clientes"
  ///apiBase:string = "http://localhost:3000/clientes"
  //apiBase:string = "https://639484544df924eada48b34.mockapi.io/usuarios"
   apiBase:string = "https://67ab98005853dfff53d7fa6f.mockapi.io/user"

  getAllUsers(){
    return this.http.get(this.apiBase)
  }

  getUserById(id:string){
    return this.http.get(`${this.apiBase}/${id}`)
  }

  postUsers(user:User){
    return this.http.post(this.apiBase, user)
  }

  putUsers(user:User){
    return this.http.put(`${this.apiBase}/${user.id}`, user)
  }

  deleteUsers(id:string){
    return this.http.delete(`${this.apiBase}/${id}`)
  }

  

}
