import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {


  getTotalPrice(): number {
    let totalAmount = 0;
    this.cartItems.map((a:any)=>{
      totalAmount += a.total;
    })
    return totalAmount;
    throw new Error('Method not implemented.');
  }
  getProducts() {
    throw new Error('Method not implemented.');
  }

  private localCart:string='localCart';
  public cartItems = [];
  public products = new Subject();
  public totalAmount = new Subject<number>();

  addToCart(product: any) {
    product.quantity = 1;
    this.getCartItems();
    this.cartItems.push(product);
    localStorage.setItem(this.localCart, JSON.stringify(this.cartItems));
  }

  getCartItems() {
    var data = localStorage.getItem(this.localCart);
    if (data) {
      return this.cartItems = JSON.parse(data);
    }
  }

  // getTotalPrice() {
  //   let totalAmount = 0;

  //   this.cartItems.map(item => {
  //     this.totalAmount += item.price;
  //   });

  //   return totalAmount
  // }

  removeFromCart(index) {
    this.cartItems.splice(index, 1);
    localStorage.setItem(this.localCart, JSON.stringify(this.cartItems));
  }

  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }
}
