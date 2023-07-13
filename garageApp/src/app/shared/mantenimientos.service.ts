import { Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import { Mantenimiento } from '../models/mantenimiento'; 
import { HttpClient } from '@angular/common/http';
import { Respuesta } from '../models/respuesta';
@Injectable({
  providedIn: 'root'
})
export class MantenimientosService {

  private url: string = 'http://localhost:3000/mantenimiento'; 


  constructor(private http: HttpClient) { }

  getAllMant(id_coches: number): Observable<Respuesta> 
  {
    let apiUrl = `${this.url}/${id_coches}`;
    return this.http.get<Respuesta>(apiUrl)
  }

  add(mantenimiento: Mantenimiento): Observable<any> 
  {
    return this.http.post(this.url, mantenimiento);
  }

  getOneMant(fecha: any): Observable<any> 
  {
    let apiUrl = `${this.url}/${fecha}`;
    return this.http.get<Respuesta>(apiUrl)
  }
  
}
