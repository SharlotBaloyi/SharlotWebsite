import { isNgTemplate } from '@angular/compiler';
import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../_service/cart.service';
import { ProductService } from '../_service/product.service';


@Component({
  selector: 'product-list-component',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
public products:any;
private singleProduct;
public isAdded;
searchKey:string ="";

  constructor(

    private productservice: ProductService,
    private route :ActivatedRoute,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

  //   this.productservice.getProducts().subscribe((products: any )=>{
      // console.log(products);
  //     this.products=products;

  //     this.products.forEach((a:any)=>{
  //       Object.assign(a,{quantity:1,total:a.price});

  //       this.products= products.map(obj => ({ ...obj, quantity: 0 }));
  //       this.productservice.getProducts().subscribe(data=>{
  //         if (data && data.length > 0){

  //         }else{
  //           this.products.map((item, index)=>{
  //             this.isAdded[index] = false;
  //           });
  //         }
  //       });
  //   });
  // })

  this.productservice.getProducts().subscribe(res=>{
    this.products=res;

    this.products.forEach((a:any)=>{
      Object.assign(a,{quantity:1,total:a.price});
  });
  this.cartService.search.subscribe((val :any)=>{
    this.searchKey=val;
  })
});
}

    // this.isAdded = new Array(this.products.length);
    // this.isAdded.fill(false, 0, this.products.length);
    // console.log('this.isAdded -> ', this.isAdded, this.products);



  addToCart(product: any) {
    this.cartService.addToCart(product);
      // window.alert('Your product has been added to the cart!');
    // if (event.target.classList.contains('btn-success')) {
    //   alert('This product is already added into cart.');
    //   return false;
    // }

    // Change button color to green
    this.products.map((item, index) => {
      if (item.id === product) {
        this.isAdded[index] = true;
      }
    })

    this.singleProduct = this.products.filter(product => {
      return product.id === product;
    });

    // this.cartItems.push(this.singleProduct[0]);

    this.productservice.addProductToCart(this.singleProduct[0]);
  }
  }




  // Add item in cart on Button click
  // ===============================

//  (method)ProductListComponent.addToChat(event:any,productId)boolean:any{
//     if (event.target.classList.contains('btn-success')) {
//       alert('This product is already added into cart.');
//       return true;
//   }

//     // Change button color to green
//     this.products.map((item, index) => {
//       if (item.id === productId) {
//         this.isAdded[index] = true;
//       }
//     })

//     this.singleProduct = this.products.filter(product => {
//       return product.id === productId;
//     });

//     // this.cartItems.push(this.singleProduct[0]);

//     this.productservice.addProductToCart(this.singleProduct[0]);
//   }

// }







