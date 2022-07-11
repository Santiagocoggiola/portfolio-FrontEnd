import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  img = "Santi2.png";
  textArea = "I'm Santiago Coggiola, I'm a web developer that can work with multiple technologies, make beautiful dynamic websites. After finishing my elementary studies" 
  + "I started to study programming, which is my passion. I'm a proactive person, that want to learn more and overcome in various skills.";
  constructor() { }

  ngOnInit(): void {
  }

}
