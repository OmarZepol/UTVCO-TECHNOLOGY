import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Solicitud, AuthResponse } from '../models/solicitud';


@Injectable({
  providedIn: 'root'
})
export class SolicitudService {
  private urlB: string = environment.url;

  get(){}

  constructor(private http: HttpClient) { }

  registrarSolicutud(nombre: string, email: string, telefono: string, asunto: string, descripcion: string){
    const url = `${this.urlB}/solicitud/create`;
    const body = {nombre,email,telefono,asunto, descripcion};
    return this.http.post<AuthResponse>(url,body);
    
  }
}
