import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor( private route : Router ) {}

  ngOnInit(): void {
  }

  goToSource() : any{
    this.route.navigateByUrl('source');
  }

  onSubmit(contactForm : NgForm){

  }

}
