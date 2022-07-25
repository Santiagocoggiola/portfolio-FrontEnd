import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from 'src/app/services/rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnInit {
  @Input() entryProp: any;
  @Input() entryData : any;
  @Output() newBoolEvent = new EventEmitter<boolean>();
  @Output() newItemEvent = new EventEmitter<any>();
  apiUrl = "http://localhost:8080";
  form : FormGroup;
  retrivedImg ={
    data : ""
  };
  finish = false;
  display = "block";
  selectedFile : File | undefined;
  message = "";
  response : any;
  base64Data : any;
  constructor(private formBuilder: FormBuilder, private rest:RestService, private http : HttpClient, private auth : AuthService, private route : Router) { 
    this.form = this.formBuilder.group({
      element:['',[]],
    })
  }

  ngOnInit(): void {
  }
  
  get Element(){
    return this.form.get("element");
  }
  public tryToEdit(){
    this.entryData[this.entryProp?.type] = this.Element?.value;    
    console.log(this.entryProp?.editUrl);
    let url = "";
    if(this.entryProp?.model === "about"){
      url = this.entryData?.id.toString() + "/" + this.auth.Token + "?photoPath=" + this.entryData?.photoPath + "&text=" +this.entryData?.text + "&isActive=" + this.entryData?.isActive;
    }else{
      url = this.entryData?.id.toString() + "/" + this.auth.Token + "?imgPath=" + this.entryData?.imgPath + "&isActive=" + this.entryData?.isActive;
      console.log(JSON.stringify(this.entryData?.id.toString() + "/" + this.auth.Token + "?imgPath=" + this.entryData?.imgPath + "&isActive=" + this.entryData?.isActive));
    }

    this.rest.set(`/admin/${this.entryProp?.model}/editar/`, url);
    this.newItemEvent.emit(this.Element?.value);
  }
  onFileSelected(event : any){
      this.selectedFile = event.target.files[0];
  }
  onUpload(){
    this.entryData[this.entryProp?.type] = this.selectedFile?.name;
    this.rest.set(this.entryProp?.url + `/admin/${this.entryProp?.model}/editar/`, this.entryData);
    this.uploadImg(this.selectedFile, this.message);    
  } 
  uploadImg (selectedFile : any, message : any){    
    //FormData API provides methods and properties to allow us easily prepare form data to be sent with POST HTTP requests.
    const uploadImageData = new FormData();
    uploadImageData.append('imageFile', selectedFile, selectedFile.name);
    //Make a call to the Spring Boot Application to save the image
    this.http.post(`${this.apiUrl}/image/admin/upload/${this.auth.token}`, uploadImageData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          message = 'Image uploaded successfully';
        } else {
          message = 'Image not uploaded successfully';
        }
      }
      );
  }
  changeImg(){
    this.newItemEvent.emit(this.entryData[this.entryProp?.type]);
  }
  public closeModal(event : boolean){
    this.newBoolEvent.emit(event);
    this.display = "none";
  }
  getImage(){
    //Make a call to Sprinf Boot to get the Image Bytes.
    this.http.get(`${this.apiUrl}/image/get/info/${this.entryData[this.entryProp?.type]}`)
      .subscribe(
        res => {
          this.response = res;
          this.base64Data = this.response.image;
          let ext = this.entryData?.photoPath.split('.');
          this.retrivedImg.data = `data:image/${ext[1]};base64,` + this.base64Data;
          
        }
      );         
  }
  
}
