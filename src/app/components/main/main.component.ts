import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'portfolio-Frontend';
  public banner: any = [];
  public about: any = [];
  public education: any = [];
  public experience: any = [];
  public projects: any = [];
  public skills: any = [];
  public tecnologies: any = [];
  
  constructor(private RestService:RestService) { }

  ngOnInit() : void{
    this.getArrayData();
  }

  public getArrayData(){
    this.loadDataBanner(`/database/banner/get`);
    this.loadDataAbout(`/database/about/get`);
    this.loadDataEducation(`/database/education/get`);
    this.loadDataExperience(`/database/experience/get`);
    this.loadDataProjects(`/database/projects/get`);
    this.loadDataSkills(`/database/skills/get`);
    this.loadDataTecnologies(`/database/tecnologies/get`);   
  }

  public loadDataAbout(url : string){
    this.RestService.get(url)
    .subscribe(respuesta => {
       this.about = respuesta;
    })
    return this.about;
  }
  public loadDataBanner(url : string){
    this.RestService.get(url)
    .subscribe(respuesta => {
      this.banner = respuesta;
    })
  }
  public loadDataEducation(url : string){
    this.RestService.get(url)
    .subscribe(respuesta => {
      this.education = respuesta;
    })
  }
  public loadDataExperience(url : string){
    this.RestService.get(url)
    .subscribe(respuesta => {
       this.experience = respuesta;
    })
  }
  public loadDataProjects(url : string){
    this.RestService.get(url)
    .subscribe(respuesta => {
       this.projects = respuesta;
    })
  }
  public loadDataSkills(url : string){
    this.RestService.get(url)
    .subscribe(respuesta => {
       this.skills = respuesta;
    })
  }
  public loadDataTecnologies(url : string){
    this.RestService.get(url)
    .subscribe(respuesta => {
       this.tecnologies = respuesta;
    })
  }
}
