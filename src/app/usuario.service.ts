import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuariosUrl = "https://localhost:5001/v1/usuarios";

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<any[]>(`${this.usuariosUrl}`);
  }
}
