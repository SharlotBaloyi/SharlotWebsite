import { Component, OnInit } from '@angular/core';
import { CartService } from '../_service/cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  [x: string]: any;

  title = 'website';
  public totalItem : number =0;
  public searchTerm : string='';

  constructor(private cartService: CartService){}

  ngOnInit() {
    this.cartService.getProducts()
    .subscribe((res: string | any[])=>{
      this.totalItem = res.length;
    });
  }
  search(event:any){
    this.searchTerm =(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  }




