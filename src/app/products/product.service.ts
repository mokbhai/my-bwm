import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from,Observable } from 'rxjs';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }
  createProduct(productBody:Observable<Product>){
    const baseUrl = "http://localhost:4200/Products";
    return this.httpClient.post<Product>(baseUrl, productBody);
  }
  viewProduct(productID:Observable<Product>){
    const baseUrl = "http://localhost:4200/Products" + productID;
    return this.httpClient.get<Product>(baseUrl);
  }
  updateProduct(productBody:Observable<Product>, productID:Observable<Product>) {
    const baseUrl = "http://localhost:4200/Products" + productID;
    return this.httpClient.put<Product>(baseUrl, productBody);
  }
  deleteProduct(productID:Observable<Product>) {
    const baseUrl = "http://localhost:4200/Products" + productID;
    return this.httpClient.delete<Product>(baseUrl);
  }
  serchCatProduct(catID:Observable<Product>) {
    const baseUrl = "http://localhost:4200/cat=" + catID;
    return this.httpClient.get<Product>(baseUrl);
  }
  serchDateProduct(dateParams:Observable<Product>) {
    const baseUrl = "http://localhost:4200/date=" + dateParams;
    return this.httpClient.get<Product>(baseUrl);
  }
}
