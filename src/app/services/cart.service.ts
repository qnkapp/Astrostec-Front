import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: any = [];

  constructor() { }

  addToCart(product: any, qty: number) {

    if (!this.items.some((item: any) => item.id == product.id)) {
      product.quantite = qty;
      this.items.push(product);
    }
    else {
      product.quantite += qty;
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
