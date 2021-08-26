import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


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
      this.http.post('https://formspree.io/f/xoqypozl', //Utilisation d'un lien fourni par formspree (compte créé pour rediriger les mail vers la boîte mail contact)
      { Nom : email.nom, Prénom : email.prenom, Email : email.email, Objet : email.subject, Message : email.message },
      { 'headers' : headers }).subscribe(
        response => {
          console.log(response);
        }
      );
      this.route.navigateByUrl('remerciement-form-contact');
    }
  }

}
