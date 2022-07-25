import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input} from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  @Input() entryData : any;
  @Input() boolAdd : boolean = false;
  retrivedImg ={
    data : ""
  };
  apiUrl = "http://localhost:8080"
  response : any;
  base64Data : any;
  constructor(private auth: AuthService, private http : HttpClient) { }

  ngOnInit(): void {
    this.getImage();
  }
  get logIn(){
    return this.auth.logIn;
  }
  getImage(){
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get(`${this.apiUrl}/image/get/info/` + this.entryData?.logoPath)
      .subscribe(
        res => {
          this.response = res;
          this.base64Data = this.response.image;
          this.retrivedImg.data = 'data:image/png;base64,' + this.base64Data;
    
        }
      );           
  }
}
