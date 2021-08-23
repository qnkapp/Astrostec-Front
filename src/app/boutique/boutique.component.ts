import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailProduitBoutiqueComponent } from '../detail-produit-boutique/detail-produit-boutique.component';
import { PanierComponent } from '../panier/panier.component';
import { HttpClient } from '@angular/common/http';
import { OtherService } from '../services/other.service';
 
@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  produits:any;
  constructor(private dialog:MatDialog, private http:HttpClient,private otherService:OtherService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  goToDetail():void{
    const mydial = this.dialog.open(DetailProduitBoutiqueComponent);
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

}
