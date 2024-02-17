import { Routes } from '@angular/router';
import { ProductListComponent } from './product-listings/product-listings.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';

export const routes: Routes = [
    { path: '', component: ProductListComponent },
    { path: ':productId', component: ProductDetailComponent},
];
