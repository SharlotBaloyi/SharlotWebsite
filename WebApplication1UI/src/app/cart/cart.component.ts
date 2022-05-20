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
  totalAmount: number;
  products: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    // this.productservice.getProducts().subscribe((data: any) =>{
    //   this.cartItems=data;
    this.items = this.cartService.getCartItems();
    if (this.items) this.getTotal(this.items);
  }

  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }

  onDelete(i: number) {
    this.cartService.removeFromCart(i);
    this.items = this.cartService.getCartItems();
    this.getTotal(this.items);
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

  getTotal(data: any) {
    //for(const item of data) this.totalAmount += item.price * item.quantity;
  }

  updateSubtotal(value: any) {
    console.log(value);
  }
}
