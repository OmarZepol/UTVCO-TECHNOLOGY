import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { AuthResponse } from '../models/registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private urlB: string = environment.url

  get(){}

  constructor(private http:HttpClient) { }

  registrarUsuario(nombre: string, ape_m: string, ape_p: string, email: string, password: string, telefono: string){
    const url = `${this.urlB}/register`;
    const body = {nombre, ape_m, ape_p, email, password, telefono};
    return this.http.post<AuthResponse>(url,body);
  }
}
