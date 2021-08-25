import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PaymentCardComponent } from '../payment-card/payment-card.component';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {

  
  constructor(private cartService:CartService,private dialog:MatDialog) { }

  items=this.cartService.getItems();


  ngOnInit(): void {
    this.items=this.cartService.getItems();
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

  deleteItem(product:any):void{
    this.cartService.deleteItem(product);
    window.alert('Le produit a été supprimé du panier !');
    console.log(this.cartService.getItems());
  }

  modifyQtyProduct(evt:Event, p:any):void{
    var n = (evt.target as HTMLInputElement).valueAsNumber;
    this.cartService.modifyQtyItem(p,n);
  }

  goToCardPayment(){
    const mydial = this.dialog.open(PaymentCardComponent,{
      panelClass: 'custom-dialog'
    });
  }

}
