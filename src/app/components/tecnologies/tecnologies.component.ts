import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css']
})
export class TecnologiesComponent implements OnInit {
  @Input () entryData : any;
  @Input() boolAdd : boolean = false;
  retrivedImg =
  [
    {
      data : ""
    },
    {
      data : ""
    },
    {
      data : ""
    },
    {
      data : ""
    }
  ];
  apiUrl = "http://localhost:8080"
  response : any;
  base64Data : any;
  constructor(private auth: AuthService, private http : HttpClient) { }

  ngOnInit(): void {
    for(let i = 1; i < 5; i++){
      this.getImage(i);
    }
  }
  get logIn(){
    return this.auth.logIn;
  }
  getImage(index : any){
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get(`${this.apiUrl}/image/get/info/` + this.entryData?.[`logoPath${index}`])
      .subscribe(
        res => {
          this.response = res;
          this.base64Data = this.response.image;
          this.retrivedImg[index-1].data = 'data:image/png;base64,' + this.base64Data;
        }
      );           
  }
}
