import { Router, RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { ProductSubscribeDemoComponent } from './product-subscribe-demo/product-subscribe-demo.component';
import { EditProductSubscribeDemoComponent } from './edit-product-subscribe-demo/edit-product-subscribe-demo.component';

const arr: Routes = [
  { path: '', component: ProductComponent },
  {path:'editProduct/:pid',component:EditProductComponent},
  {path:'productWithSubscribe',component:ProductSubscribeDemoComponent},
  {path:'editProductSubscribe/:pid',component:EditProductSubscribeDemoComponent},
  { path: 'dataBinding', component: DataBindingComponent },
  { path: '**', component: PageNotFoundComponent },


];
export const routing = RouterModule.forRoot(arr);
