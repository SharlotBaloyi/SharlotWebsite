import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartservice: any;
  router: any;


  getTotalPrice(): number {
    let totalAmount = 0;
    this.cartItems.map((a:any)=>{
      totalAmount += a.total;
    })
    return totalAmount;

  }
  getProducts() {

    return this.product.asObservable();
  }
  setProduct(product:any){
    this.cartItems.push(...product)
    this.product.next(product)
  }

  private localCart:string='localCart';
  public cartItems:any = [];
  public products = new Subject();
  public totalAmount = new Subject<number>();
  public search = new BehaviorSubject<string>("");
  public product = new BehaviorSubject<any>([]);

  addToCart(product: any) {
    product.quantity = 1;
    this.getCartItems();
    this.cartItems.push(product);
    this.product.next(this.cartItems);
    this.getTotalPrice();
    localStorage.setItem(this.localCart, JSON.stringify(this.cartItems));
    console.log(this.cartItems)
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
    this.product.next(this.cartItems);
    localStorage.setItem(this.localCart, JSON.stringify(this.cartItems));
  }
  removeAllCart(productId){
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }

    })

    // Update Observable value
    this.products.next(this.cartItems);
  }


  removeProductFromCart(productId) {
    this.cartItems.map((item, index) => {
      if (item.id === productId) {
        this.cartItems.splice(index, 1);
      }

    })

    // Update Observable value
    this.products.next(this.cartItems);
  }

  emptryCart() {
    this.cartItems.length = 0;
    this.products.next(this.cartItems);
  }
logout(){
  localStorage.removeItem("token")
  this.router.navigate(['/login'])
}

  bona(){
    alert("Congratulations your order have been successfully made");
    this.cartservice.removeAllCart();
    }
}
