import { Injectable } from '@angular/core';
import { Product } from './product';
import { Http, Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


@Injectable()
export class ProductService {

  constructor(private http: Http) { }

  getProducts(productId: number): Observable<Product[]> {
    if (productId) {
      return this.http.get('http://northwindapi.azurewebsites.net/api/products/' + productId)
      .map(response => response.json());
    } else {
      return this.http.get('http://northwindapi.azurewebsites.net/api/products')
      .map(response => response.json());
    }
  }
}
