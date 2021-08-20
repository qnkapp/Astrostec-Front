import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DetailProduitBoutiqueComponent } from '../detail-produit-boutique/detail-produit-boutique.component';
 
@Component({
  selector: 'app-boutique',
  templateUrl: './boutique.component.html',
  styleUrls: ['./boutique.component.css']
})
export class BoutiqueComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
    
  }

  goToDetail():void{
    const mydial = this.dialog.open(DetailProduitBoutiqueComponent);
  }

}
