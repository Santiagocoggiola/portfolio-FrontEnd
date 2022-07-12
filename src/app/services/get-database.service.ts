import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http'
import {Router} from '@angular/router'
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class GetDatabaseService {
  constructor(private http: HttpClient){}
    
  public getExperience(url : string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name","experience");
    return this.get(url, queryParams);
  }
  
  public getEducation(url : string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name","education");
    return this.get(url, queryParams);
  }
  
  public getProjects(url : string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name","projects");
    return this.get(url, queryParams);
  }
  
  public getSkills(url : string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name","skills");
    return this.get(url, queryParams);
  }
  
  public getAbout(url : string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name","about");
    return this.get(url, queryParams);
  }
  
  public getBanner(url : string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name","banner");
    return this.get(url, queryParams);
  }
  
  public getTecnologies(url : string){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("name","tecnologies");
    return this.get(url, queryParams);
  }

  public get(url:string, queryParams: HttpParams){
    return this.http.get(url, {params:queryParams});
  }
}
