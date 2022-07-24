import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input () entryData : any;
  @Input() boolAdd : boolean = false;
  constructor(private auth: AuthService) { }
  
  ngOnInit(): void {
  }
  get logIn(){
    return this.auth.logIn;
  }
}
