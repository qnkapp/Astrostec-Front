import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Membre } from '../_models/membre.model';



@Component({
  selector: 'app-sujets',
  templateUrl: './sujets.component.html',
  styleUrls: ['sujets.component.css']
})
export class SujetsComponent implements OnInit {

message!: any;
sujet! : any;
newSujet!: any;
auteur!: Membre;
todaysdate = new Date();

  constructor(private route : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getSujets();
  }



  getSujets(): any{
    this.http.get('http://localhost:8084/from_sujets/{sujets}').subscribe({
      next: (data) => { this.sujet = data; },
      error: (err) => { console.log(err)}
    })
  }  

onSubmit(sujetsForm: NgForm){

  const theme = sujetsForm.value;

  }

}