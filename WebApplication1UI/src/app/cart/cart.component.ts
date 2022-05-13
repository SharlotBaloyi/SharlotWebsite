import { Component, OnInit } from '@angular/core';
import { ProductService } from '../_service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private cartItems: any;
  private totalAmmount: any;

  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.productservice.getProducts().subscribe((data: any) =>{
      this.cartItems=data;

    });
  }
// Remove item from cart list
removeItemFromCart(productId: any) {
   this.cartItems.map((item: { id: any; }, index: any) => {
    if (item.id === productId) {
      this.cartItems.splice(index, 1);
    }
  });

  this.productservice.setProducts(this.cartItems);

   this.productservice.removeProductFromCart(productId);

}

emptyCart() {
  this.productservice.emptryCart();
}

}
