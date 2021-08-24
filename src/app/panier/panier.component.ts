import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  
  constructor(private cartService:CartService) { }

  items=this.cartService.getItems();


  ngOnInit(): void {
    console.log(this.items);
    this.getPrix();
  }

  getPrix(): number{
    var prix = 0;
    this.items.forEach((element: any) => {
      prix+=element.prix*element.quantite;
    });
    return prix;
  }



}
