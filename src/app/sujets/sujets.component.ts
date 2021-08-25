import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['sujets.component.css']
})
export class SujetsComponent implements OnInit {

  constructor() { }

  message: any;
  sujet = {text: null, pseudo: null, date: null};
  newSujet: any;
  todaysdate = new Date();
  


  ngOnInit(): void {
  }

}