import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CartService } from '../_service/cart.service';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  items: any[] = [];
  cartItems: any = [];
  total: number;
  products: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.productservice.getProducts().subscribe((data: any) =>{
    //   this.cartItems=data;
    this.items = this.cartService.getCartItems();
    if (this.items) this.getTotal();
  }

  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  onDelete(i: number) {
    this.cartService.removeFromCart(i);
    this.items = this.cartService.getCartItems();
    this.getTotal();
  }

  validateInput(event: any, i: number) {
    const quantity = +event.target.value;
    if (quantity < 1) {
      event.target.value = this.items[i].quantity;
      return;
    }
  }

  // private UpdateQuantity(quantity:number,i:number){
  //   this.items[i].quantity = quantity;
  //   this.getTotal(this.items);
  // }

  getTotal() {
    let totalA = 0;
    let sub;
    for (const item of this.items) totalA += item.price * item.quantity;
    this.total = totalA;

    return this.total;
  }

  updateSubtotal(value: any) {
    console.log(value);
  }

  updateTotal(value: any) {
    console.log(value);
  }
}
