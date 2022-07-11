import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tecnologies',
  templateUrl: './tecnologies.component.html',
  styleUrls: ['./tecnologies.component.css']
})
export class TecnologiesComponent implements OnInit {
  @Input () entryData : any;
  constructor() { }

  ngOnInit(): void {
  }

}
