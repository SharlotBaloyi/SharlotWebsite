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
  constructor(private ProductService:ProductService
  ) { }

  ngOnInit(): void {
    this.ProductService.getProducts().subscribe((data: any) =>{
      this.cartItems=data;

    });
  }
// Remove item from cart list
removeItemFromCart(productId: any) {
  /* this.cartItems.map((item, index) => {
    if (item.id === productId) {
      this.cartItems.splice(index, 1);
    }
  });

  this.mySharedService.setProducts(this.cartItems); */

  // this.ProductService.removeProductFromCart(productId);

}

emptyCart() {
  // this.ProductService.emptryCart();
}

}
