import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio-Frontend';
  public education:Array<any> = [];
  public experience:Array<any> = [];
  public projects:Array<any> = [];
  public skills:Array<any> = [];
  public tecnologies:Array<any> = [];
  ngOnInit() : void{
    this.education= [
      {university:"Universidad Blas Pascal", career:"Ingenieria en informatica",date:"2013-2015", img:"logo-ubp.png"},
      {university:"Colegio Universitario IES 21", career:"Diseño de videos juegos",date:"2015-2018", img:"logo-ies.png"},
      {university:"FaMAF", career:"Licenciatura en ciencias de la computacion",date:"2020-Present", img:"logoFaMAF.png"}
    ];
    this.experience =[
      {tittle:"Fullstack Developer", position:"Freelancer",date:"2022-Present", img:"Fullstack.png"}     
    ];
    this.projects = [{name:"Name of the project", description:"Description of the project", img:"Frame.png"}];
    this.skills = [{ skill:"Teamwork", percentage:"80" }];
    this.tecnologies = [{img1: "Angular.png", img2: "C.png", img3: "C-sharp.png", img4:"Typescript.png"}];
  }
}
