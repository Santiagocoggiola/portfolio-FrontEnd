import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  @Input () entryData : any;
  @Input() boolAdd : boolean = false;
  constructor(private auth: AuthService, private http : HttpClient) { }
  retrivedImg ={
    data : ""
  };
  response : any;
  base64Data : any;
  apiUrl = "http://localhost:8080";
  ngOnInit(): void {
    this.getImage();
  }
  get logIn(){
    return this.auth.logIn;
  }
  getImage(){
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get(`${this.apiUrl}/image/get/info/` + this.entryData?.imgPath)
      .subscribe(
        res => {
          this.response = res;
          this.base64Data = this.response.image;
          this.retrivedImg.data = 'data:image/png;base64,' + this.base64Data;
    
        }
      );           
  }
}


