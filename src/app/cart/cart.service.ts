import { Injectable } from '@angular/core';
import { Product } from '../product/product';
import { CartItem } from './cart-item';
import { CartItemList } from './car-list-mock';

@Injectable()
export class CartService {
  cartItems: CartItem[];

  constructor() {}

  addToCart(product: Product) {
    const addedProduct = CartItemList.find(
      p => p.product.productId === product.productId
    );

    if (addedProduct) {
      addedProduct.quantity += 1;
    } else {
      const cartItem = new CartItem();
      cartItem.product = product;
      cartItem.quantity = 1;

      CartItemList.push(cartItem);
    }
  }

  list(): CartItem[] {
    return CartItemList;
  }

  removeProduct(product: Product) {
    const existProduct = CartItemList.find(
      p => p.product.productId === product.productId);

    const index = CartItemList.indexOf(existProduct);

    if (index !== -1) {
      CartItemList.splice(index, 1);
    }
  }
}
