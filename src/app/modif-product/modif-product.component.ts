import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-modif-product',
  templateUrl: './modif-product.component.html',
  styleUrls: ['./modif-product.component.css']
})
export class ModifProductComponent implements OnInit {

  produit: any;

  productName: any;
  descName: any;
  imgName: any;
  prixName: any;
  stockName: any;
  productDetails = {
    "nom": "",
    "description": "",
    "image": "",
    "prix": 0,
    "stock": 0,
  };
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private http: HttpClient, private otherService: OtherService) { }

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit(): void {
    this.http.get(this.otherService.lienBack + 'produit/' + this.data.id).subscribe({
      next: (data) => { this.produit = data; 
        this.productName = this.produit.nom; 
        this.descName = this.produit.description; 
        this.imgName = this.produit.image; 
        this.prixName = this.produit.prix; 
        this.stockName = this.produit.stock },
      error: (err) => { console.log(err) }
    });
  }

  modifProduct(){
    this.productDetails.nom=this.productName;
    this.productDetails.description=this.descName;
    this.productDetails.image=this.imgName;
    this.productDetails.prix=this.prixName;
    this.productDetails.stock=this.stockName;

     this.http.put(this.otherService.lienBack+"produit/"+this.data.id,this.productDetails).subscribe({
       error:(err) =>console.log(err)
     })
  }



}
