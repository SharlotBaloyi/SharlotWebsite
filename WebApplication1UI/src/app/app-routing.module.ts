import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [

  { path: '', pathMatch: 'full', redirectTo: 'products'},

  { path: 'login', component: LoginComponent},

  { path: 'register', component: RegisterComponent, data: {title: 'Add new User'}},
  { path: 'products', component: ProductListComponent},
  { path: 'product', component: ProductDetailsComponent},
  { path: 'checkout', component: CheckOutComponent},
  { path: 'cart', component: CartComponent},


];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

