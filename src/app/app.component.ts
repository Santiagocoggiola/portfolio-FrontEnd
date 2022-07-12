import { Component, OnInit } from '@angular/core';
import { GetDatabaseService } from './services/get-database.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'portfolio-Frontend';
  public about: any = [];
  public banner: any = [];
  public education: any = [];
  public experience: any = [];
  public projects: any = [];
  public skills: any = [];
  public tecnologies: any = [];
  
  
  constructor(private GetDataBaseService:GetDatabaseService){}
  ngOnInit() : void{
    /*
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
    */
   this.loadData();
  }

  public loadData(){
    this.about = this.GetDataBaseService.getAbout(`http://localhost:3000/database`);
    this.banner = this.GetDataBaseService.getBanner(`http://localhost:3000/database`);
    this.education = this.GetDataBaseService.getEducation(`http://localhost:3000/database`);
    this.experience = this.GetDataBaseService.getExperience(`http://localhost:3000/database`);
    this.projects = this.GetDataBaseService.getProjects(`http://localhost:3000/database`);
    this.skills = this.GetDataBaseService.getSkills(`http://localhost:3000/database`);
    this.tecnologies = this.GetDataBaseService.getTecnologies(`http://localhost:3000/database`);    
  }
}
