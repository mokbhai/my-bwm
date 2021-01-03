import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/product.service';
import { Cat } from '../cat';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  catag: any;
  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.productsService.getCat().subscribe(data=>{
      this.catag = data;
    })
  }

}
