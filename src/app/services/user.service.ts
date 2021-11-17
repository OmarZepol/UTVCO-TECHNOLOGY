import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Login} from '../models/login';
import { Request} from '../models/request';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  URL='http://localhost:3000/';
  constructor(private http: HttpClient) { }

  login(login: Login):Observable<Request>{
    return this.http.post<Request>(`${this.URL}uttech/login`,login);
  }
}
