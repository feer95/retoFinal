import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private url: string = 'http://localhost:3000'; 
  public logueado: boolean = false;
  public logueadoId : number = 0;
  public user: User = new User;


  constructor(private http: HttpClient) {
    this.logueado = false;
    
  }

  register(user: User): Observable<any> {
    return this.http.post(`${this.url}/register`, user);
  }

  login(user: User): Observable<any> {
    // console.log("datos recibidos: "+user);
    return this.http.post(`${this.url}/login`, user);
  }

  editUser(user: User): Observable<any> {
    return this.http.put(`${this.url}/users`, user)
  }
}
