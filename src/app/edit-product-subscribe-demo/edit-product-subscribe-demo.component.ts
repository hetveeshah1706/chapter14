import { Component, OnInit } from '@angular/core';
import { product } from '../product/product_class';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product-subscribe-demo',
  templateUrl: './edit-product-subscribe-demo.component.html',
  styleUrls: ['./edit-product-subscribe-demo.component.css']
})
export class EditProductSubscribeDemoComponent implements OnInit {

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
    this._actroutes.params.subscribe((x) => {
      this.pid = x.pid;
      console.log(this.pid);
      for(let i=0;i<this.allProduct.length;i++){
        if(this.pid==this.allProduct[i].pid){
          this.pimg=this.allProduct[i].pimg;
          this.pname=this.allProduct[i].pname;
          this.pprice=this.allProduct[i].pprice;
        }
      }
    });
  }
  onEdit(item){
    this._route.navigate(["/editProductSubscribe",item.pid])
  }


}
