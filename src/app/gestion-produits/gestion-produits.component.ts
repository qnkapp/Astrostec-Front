import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddProductComponent } from '../add-product/add-product.component';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-gestion-produits',
  templateUrl: './gestion-produits.component.html',
  styleUrls: ['./gestion-produits.component.css']
})
export class GestionProduitsComponent implements OnInit {

  produits:any;

  constructor(private http:HttpClient,private otherService:OtherService,private matDialog:MatDialog) { }

  ngOnInit(): void {
    this.getProducts();
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

  goToAdd(){
    this.matDialog.open(AddProductComponent,{
      height:'600px',
      width:'500px',
    })
  }

}
