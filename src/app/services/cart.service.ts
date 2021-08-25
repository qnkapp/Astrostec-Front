import { Injectable } from '@angular/core';

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


}
