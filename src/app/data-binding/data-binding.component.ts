import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template:`
  <div class="container">
      <h1>STRING IS::{{str}}</h1>
      <h1>BOOLEAN VALUE IS::{{boolVal}}</h1>
      <h1>NUMBER IS::{{num}}</h1>
      <h1>ARRAY IS::{{arr}}</h1>
  </div>
`,
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  constructor() { }
  str:string="Hello World!!";
  boolVal:boolean=true;
  num:number=10;
  arr=["Welcome","To","Angular!!"]

  ngOnInit(): void {
  }

}
