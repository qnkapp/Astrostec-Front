import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailProduitBoutiqueComponent } from '../detail-produit-boutique/detail-produit-boutique.component';
import { PanierComponent } from '../panier/panier.component';
import { HttpClient } from '@angular/common/http';
import { OtherService } from '../services/other.service';
import { CartService } from '../services/cart.service';
 
@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  produits:any;

  constructor(private dialog:MatDialog, private http:HttpClient,private otherService:OtherService,private cartService:CartService) { }

  ngOnInit(): void {
    this.getProducts();
  }


  goToDetail(p:any):void{
    const mydial = this.dialog.open(DetailProduitBoutiqueComponent,{
      height:'450px',
      width:'70%',
      data:p,
    });
  }

  goToCart():void{
    const mydial = this.dialog.open(PanierComponent);
  }

  getProducts():void{
    this.http.get(this.otherService.lienBack +'produit').subscribe({
      next: (data) => {this.produits =data;console.log(data)},
      error: (err) => { console.log(err)}
    });
  }
  parseFloat(prix:any):number{
    return prix.toFixed(2);
  }

  addToCart(product: any,qty:number) {
    this.cartService.addToCart(product,qty);
    window.alert('Le produit a bien été ajouté au panier !');
    console.log(this.cartService.getItems());
  }

}
