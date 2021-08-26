import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { response } from 'express';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor( private route : Router, private http : HttpClient ) {}

  ngOnInit(): void {
  }

  goToSource() : any{
    this.route.navigateByUrl('source');
  }

  onSubmit(contactForm : NgForm){
    if (contactForm.valid) {
      const email = contactForm.value;
      const headers = new HttpHeaders( { 'Content-Type' : 'application/json' } );
      this.http.post('https://formspree.io/f/xoqypozl',
      { nom : email.nom, prenom : email.prenom, mail : email.email, objet : email.subject, message : email.message },
      { 'headers' : headers }).subscribe(
        response => {
          console.log(response);
        }
      );
      this.route.navigateByUrl('remerciement-form-contact');
    }
  }

}
