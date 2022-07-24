import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient} from '@angular/common/http'
import {Router} from '@angular/router'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:8080/login'; // La url que corresponda en cada caso
  token : any;
  constructor(private http: HttpClient, private router: Router) { }
  login(username: string, password: string) {
    this.http.post(this.uri + `/getToken?username=${username}`, { password: password}, {responseType: 'text'})
    .subscribe((resp:any) => {
        //Redireccionamos al usuario a su perfil 
        console.log(resp);
        localStorage.setItem('auth_token', resp);
    })
  };

  //Para cerrar sesion eliminamos el token del localStorage
  logout(){
    localStorage.removeItem('auth_token');
  }

  //Un servicio para verificar si existe la sesion
  public get logIn():boolean{
    return (localStorage.getItem('auth_token') != null);
  }
  public get Token(){
    return localStorage.getItem('auth_token');
  }
}
