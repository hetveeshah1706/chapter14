import { Component, OnInit } from '@angular/core';
import { product } from './product_class';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(public _route:Router) {}
  allProduct: product[] = [
    new product(1, '../../assets/img1.jpg', 'Oppo', 50000, 100),
    new product(2, '../../assets/img2.jpg', 'Samsung', 40000, 50),
    new product(3, '../../assets/img3.jpg', 'One Plus', 60000, 150),
    new product(4, '../../assets/img4.jpg', 'Sony', 70000, 200),
  ];

  ngOnInit(): void {}
  onEdit(item) {
    this._route.navigate(['/editProduct', item.pid],{
      queryParams:{pid:item.pid},
      fragment:"ProductPage"
    });
  }
}
