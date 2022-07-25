import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http'
import {Router} from '@angular/router'
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  
  constructor(private http: HttpClient, private auth : AuthService){}
  public arr : any = []
  apiUrl : string = "http://localhost:8080";
  public get(url:string) {   
    return this.http.get(this.apiUrl +url);
  }

  public set(urlToPut : string, entryData : any){
    if(this.auth.logIn){
      let url = this.apiUrl + urlToPut + `${entryData?.id.toString()}/${this.auth.Token}` + `?imgPath=${entryData?.imgPath}&isActive=${entryData?.isActive}`;
      let body = "";
      this.http.put<any>(url, body).subscribe(res => {
        console.log(res);
      });
    }    
  }
  public deleteImg(urlToDelete : string, imageName : string){
    this.http.delete(`${urlToDelete}/${imageName}`);
  }
  
}