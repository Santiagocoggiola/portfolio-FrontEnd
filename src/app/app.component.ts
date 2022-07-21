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
    this.loadData();
  }

  public loadData(){
    this.GetDataBaseService.get(`http://localhost:8080/database/about/get `, this.about);
    this.GetDataBaseService.get(`http://localhost:8080/database/banner/get`, this.banner);
    
    this.GetDataBaseService.get(`http://localhost:8080/database/education/get`, this.education);
    console.log(this.education);
    this.GetDataBaseService.get(`http://localhost:8080/database/experience/get`, this.experience);
    console.log(this.experience);
    this.GetDataBaseService.get(`http://localhost:8080/database/projects/get`, this.projects);
    console.log(this.projects);
    this.GetDataBaseService.get(`http://localhost:8080/database/skills/get`, this.skills);
    console.log(this.skills);
    this.GetDataBaseService.get(`http://localhost:8080/database/tecnologies/get`, this.tecnologies);  
    console.log(this.tecnologies);
    
  }
}
