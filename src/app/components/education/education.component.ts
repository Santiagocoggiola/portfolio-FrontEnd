import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  
  @Input() entryData : any;
  @Input() boolAdd : boolean = false;
  apiUrl = "http://localhost:8080";
  edit : boolean = false;
  display : string = "";
  retrivedImg ={
    data : ""
  };
  response : any;
  base64Data : any;
  sendData = {
    id : "",
    type : "",
    field: "",
    url: "",
    model: ""
  }

  
  constructor(private auth: AuthService, private http : HttpClient) { }

  ngOnInit(): void {
    this.getImage();
  }
  public editOnClick(id : any, type : any, field : any){
    this.display = "block";
    this.Edit = true;
    this.sendData.id = id;
    this.sendData.type = type;
    this.sendData.field = field;
    this.sendData.url = "/database";
    this.sendData.model = "about";
  }
  public addItem(newValue : any){
    this.entryData.photoPath = newValue;
    (async () => { 
      await this.delay(50);
      this.getImage();
    })();
    
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
  get logIn(){
    return this.auth.logIn;
  }
  
  public eventEdit(newEvent : any){
    this.Edit = newEvent;
  }
  set Edit(newEdit:boolean){
    this.edit = newEdit;
  }
  get Edit() : boolean{
    return this.edit;
  }
 
 
  getImage(){
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get(`${this.apiUrl}/image/get/info/` + this.entryData?.logoPath)
      .subscribe(
        res => {
          this.response = res;
          this.base64Data = this.response.image;
          let ext = this.entryData?.logoPath.split('.');
          this.retrivedImg.data = `data:image/${ext[1]};base64,` + this.base64Data;
        }
      );           
  }

}
