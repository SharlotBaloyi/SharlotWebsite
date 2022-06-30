import { Component, DoCheck, OnInit } from '@angular/core';
import { CartService } from '../_service/cart.service';
import {AuthenticationService} from '../_service/authentication.service'

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements DoCheck {
  [x: string]: any;

  title = 'website';
  public totalItem : number = 0;
  public searchTerm : string='';

  constructor(private cartService: CartService,private authentication:AuthenticationService){}

  ngDoCheck():void {
   
    this.totalItem = this.cartService.getCartItems().length;
  }
  search(event:any){
    this.searchTerm =(event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
  login(){
this.route.navigate(["/login"])
  }
  logout(){
    this.authentication.logout();
  }
  }




