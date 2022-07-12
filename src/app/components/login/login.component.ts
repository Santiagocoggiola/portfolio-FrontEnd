import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  rememberMe = false;

  constructor(private authService: AuthService) { }

  Login(){
    // El servicio authService.login ya redirecciona
    // en caso de inicio de sesion positivo
    this.authService.login(this.email, this.password);
  }
  ngOnInit(): void {
  }

}
