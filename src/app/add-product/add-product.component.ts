import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  productName:any;
  descName:any;
  imgName:any;
  prixName:any;
  stockName:any;
  productDetails={
    "nom":"",
    "description":"",
    "image":"",
    "prix":0,
    "stock":0,
  };

  constructor(private http:HttpClient,private otherService:OtherService) { }

  ngOnInit(): void {
  }

  addProduct(){
    this.productDetails.nom=this.productName;
    this.productDetails.description=this.descName;
    this.productDetails.image=this.imgName;
    this.productDetails.prix=this.prixName;
    this.productDetails.stock=this.stockName;

     this.http.post(this.otherService.lienBack+"produit",this.productDetails).subscribe({
       error:(err) =>console.log(err)
     })

     window.alert("Vous avez ajouté le produit avec succès !");
  }



}
