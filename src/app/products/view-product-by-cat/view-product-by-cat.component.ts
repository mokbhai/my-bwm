import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product-by-cat',
  templateUrl: './view-product-by-cat.component.html',
  styleUrls: ['./view-product-by-cat.component.scss']
})
export class ViewProductByCatComponent implements OnInit {
  productList : any;
  constructor( private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.viewProduct().subscribe(
      data=> {
        this.productList =data;
      });
  }
}

