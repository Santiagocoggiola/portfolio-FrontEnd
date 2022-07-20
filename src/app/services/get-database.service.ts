import { Injectable } from '@angular/core';
import {HttpClientModule, HttpClient, HttpParams} from '@angular/common/http'
import {Router} from '@angular/router'
import { query } from '@angular/animations';
@Injectable({
  providedIn: 'root'
})
export class GetDatabaseService {
  constructor(private http: HttpClient){}
  
  public get(url:string, arr : Array<any>) : Array<any> {   
    this.http.get(url).subscribe((response) => {
      arr.push(response);
    });
    return arr;
  }
}
