import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import { Validators} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  form : FormGroup;
  display = "";
  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.form = this.formBuilder.group({
      email: ['',[]],
      firstName:['',[Validators.required]],
      lastName:['',[Validators.required]],
      text:['', []]
    })
  }

  get Email(){
    return this.form.get("email");
  }

  get FirstName(){
    return this.form.get("firstName");
  }

  get LastName(){
    return this.form.get("lastName");
  }

  get Text(){
    return this.form.get("text");
  }

  ngOnInit(): void {
    this.display = "block";
  }
  public Contact(){

  }
  public closeContact(){
    this.display = "none";
    this.router.navigateByUrl('/home');
  }

}
