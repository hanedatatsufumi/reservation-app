import { Component } from '@angular/core';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-listings/product-listings.component';


@Component({
  selector: 'app-product',
  standalone: true,
  imports: [
    ProductDetailComponent, 
    ProductListComponent
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {

}
