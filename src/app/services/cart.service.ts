import { Injectable } from '@angular/core';
import { empty, Observable, SchedulerLike } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];

  constructor() { }

  addToCart(product: any, qty: number) {
    var found = false;


    this.items.forEach((e: any) => {
      if (e.id == product.id) {
        product.quantite = e.quantite;
        product.quantite += qty;
        e.quantite = product.quantite;
        found=true;
      }
    });

    if(!found){
      console.log("new product");
      product.quantite = qty;
      this.items.push(product);
    }
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  deleteItem(product:any){
    this.items.forEach((e: any,index:number) => {
      if (e.id == product.id) {
        this.items.splice(index,1);
      }
    });
  }

  modifyQtyItem(product:any,qty:number){
    this.items.forEach((e: any) => {
      if (e.id == product.id) {
        product.quantite = qty;
      }
    });
  }


}
