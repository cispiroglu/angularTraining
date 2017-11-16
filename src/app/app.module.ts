import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { RouteConfigs } from './routeConfig';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { AccountComponent } from './account/account.component';
import { LoginComponent } from './account/login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CartService } from './cart/cart.service';

// for include product service
// import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CategoryComponent,
    CartComponent,
    OrderComponent,
    AccountComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(RouteConfigs),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    // for singleton service
    // ProductService
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
