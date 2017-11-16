import { Component, OnInit } from '@angular/core';
import { ProductService } from './product.service';
import { Product } from './product';
import { CartService } from '../cart/cart.service';
import { CartItem } from '../cart/cart-item';
import { ActivatedRoute } from '@angular/router';

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

  constructor(productService: ProductService,
      private cartService: CartService,
      private activatedRoute: ActivatedRoute) {

    console.log('snapshot.params', activatedRoute.snapshot.params);
    console.log('params', activatedRoute.params);

    activatedRoute.params.subscribe(
      params => { console.log('params', params); }
    );

    this.productService = productService;
  }

  ngOnInit() {
    console.log(this.activatedRoute);
    this.activatedRoute.params.subscribe(
      params => {
        // console.log(params['productId']);
        this.getProducts(params['productId']);
      }
    );
  }

  getProducts(productId: number) {
    this.productService.getProducts(productId).subscribe(p => {
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

  addToCart(product: Product, event: Event) {
    // asagidaki satir ile button elementini kapsayan div' in click eventinin tetiklenmesine engel olmaktadır.
    event.stopPropagation();

    this.cartService.addToCart(product);
    this.cartItemList = this.cartService.list();
    console.log('button click event addToCart');
    console.log(product);
  }

  removeFromCart(product: Product) {
    this.cartService.removeProduct(product);
    this.cartItemList = this.cartService.list();


  }

  divClickEvent(event: Event) {
    console.log('div click event');
  }
}
