import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { OtherService } from '../services/other.service';

@Component({
  selector: 'app-detail-produit-boutique',
  templateUrl: './detail-produit-boutique.component.html',
  styleUrls: ['./detail-produit-boutique.component.css']
})
export class DetailProduitBoutiqueComponent implements OnInit {

  produit:any;
  constructor(@Inject(MAT_DIALOG_DATA) public data:any, private http:HttpClient,private otherService:OtherService) { }

  ngOnInit(): void {
    this.getProduit();
  }

  getProduit():void{
    this.http.get(this.otherService.lienBack+'produit/'+this.data.id).subscribe({
      next: (data)=>{this.produit=data;console.log(data)},
      error: (err)=>{console.log(err)}
    });
  }

}
