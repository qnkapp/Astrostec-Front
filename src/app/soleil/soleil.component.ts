import { HttpClient, HttpHeaders } from '@angular/common/http';
import { SujetsComponent } from '../sujets/sujets.component';

import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Membre } from '../_models/membre.model';

@Component({
  selector: 'app-soleil',
  templateUrl: './soleil.component.html',
  styleUrls: ['./soleil.component.css']
})
export class SoleilComponent implements OnInit {

  commentaire!: any;
  sujet! : SujetsComponent;
  newCommentaire!: any;
  commente!: Membre;
  sateCom = new Date();

  constructor(private route : Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.getCommentaires();
  }

  getCommentaires(): any{
    this.http.get('http://localhost:8084/envoie_commentaires/').subscribe({
      next: (data) => {this.commentaire = data;},
      error: (err) => { console.log(err)}
    })

  }

  onSubmit(commentairesForm: NgForm){

    const Com = commentairesForm.value;
  }

}
