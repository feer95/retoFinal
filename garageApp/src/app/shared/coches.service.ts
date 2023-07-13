import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car'; 
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class CochesService {

  private url: string = 'http://localhost:3000/cars'; 

  constructor(private http: HttpClient) { }

  getOne(id_usuario: number): Observable<Respuesta> 
  {
    let apiUrl = `${this.url}/${id_usuario}`;

    return this.http.get<Respuesta>(apiUrl)
  }

  add(coche: Car): Observable<any> 
  {
    return this.http.post(this.url, coche);
  }

  edit(coche: Car): Observable<any> 
  {
    return this.http.put(this.url, coche);
  }

  delete(matricula: string): Observable<any> {
    let deletedCar = { matricula: matricula };
    return this.http.delete(this.url, { body: deletedCar });
  }
  
}
