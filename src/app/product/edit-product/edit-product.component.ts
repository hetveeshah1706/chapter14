import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { product } from '../product_class';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  pid:number;
  pimg:string;
  pname:string;
  pprice:number;
  soh:number;
  allProduct:product[]=[
    new product(1,"../../assets/img1.jpg","Oppo",50000,100),
    new product(2,"../../assets/img2.jpg","Samsung",40000,50),
    new product(3,"../../assets/img3.jpg","One Plus",60000,150),
    new product(4,"../../assets/img4.jpg","Sony",70000,200),
  ];
  constructor(public _actroutes:ActivatedRoute,public _route:Router) { }

  ngOnInit(): void {
    this.pid=this._actroutes.snapshot.params['pid'];
    let qid=this._actroutes.snapshot.queryParams["pid"]
    let f=this._actroutes.snapshot.fragment;
    for(let i=0;i<this.allProduct.length;i++){
      if(this.pid==this.allProduct[i].pid){
        this.pimg=this.allProduct[i].pimg;
        this.pname=this.allProduct[i].pname;
        this.pprice=this.allProduct[i].pprice;

      }

    }
  }
  onEdit(item){
    this._route.navigate(["/editProduct",item.pid])

    // console.log(item)
  }

}
