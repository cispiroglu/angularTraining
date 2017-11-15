import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../cart/cart-item';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  providers: [ProductService]
})
export class ProductComponent implements OnInit {
  products: Product[];
  productService: ProductService;
  isProduct: boolean;
  total: number;
  cartItemList: CartItem[];

  constructor(productService: ProductService, private cartService: CartService) {
    this.productService = productService;
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(p => {
      this.products = p;

      if (this.products.length > 0) {
        this.isProduct = true;
      } else {
        this.isProduct = true;
      }

      this.total = this.products.length;
    });
  }

  productDetail(product: Product) {
    console.log(product);
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.cartItemList = this.cartService.list();
  }

  removeFromCart(product: Product) {
    this.cartService.removeProduct(product);
    this.cartItemList = this.cartService.list();
  }
}
