import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { MainComponent } from './components/main/main.component';
import { Notfound404Component } from './components/notfound404/notfound404.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [ 
  {path: "home", component:MainComponent},
  {path: "login", component: LoginComponent},
  {path: "contact", component: ContactComponent},
  {path: "",  redirectTo: "home", pathMatch: "full"},
  {path: '**', component: Notfound404Component} 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
