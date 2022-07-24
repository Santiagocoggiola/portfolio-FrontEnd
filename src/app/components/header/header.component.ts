import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  buttonText : string = "Login";
  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }
  public btnClickLogin(){
    this.router.navigateByUrl('/login');
  }
  public btnClickLogout(){
    this.auth.logout();
  }
  public get logIn(){
    return this.auth.logIn;
  }
  public btnClickContact(){
    this.router.navigateByUrl('/contact');
  }
}
