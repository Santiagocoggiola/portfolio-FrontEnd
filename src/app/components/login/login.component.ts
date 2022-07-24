import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
import { AuthService } from 'src/app/services/auth.service';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rememberMe = false;
  display = "";
  form : FormGroup;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder) {
      this.form = this.formBuilder.group({
        password:['',[Validators.required]],
        username:['',[Validators.required]]
      })
  }
  get Password(){
    return this.form.get("password");
  }

  get Username(){
    return this.form.get("username");
  }

  Login(){
    // El servicio authService.login ya redirecciona
    // en caso de inicio de sesion positivo
    this.authService.login(this.Username?.value, this.Password?.value);
    if(this.authService.logIn){
      this.closeModal();
    }
  }
  ngOnInit(): void {
    this.display = "block";
  }
  public closeModal(){
    this.display = "none";
    this.router.navigateByUrl('/home');
  }

}
