import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { ProductService } from '../shared/product.service';

@Component({
  selector: 'app-product-listings',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent {
  products: any;

  constructor(private productService: ProductService) { }
  
  ngOnInit() {

    const productObservable = this.productService.getProducts();

    productObservable.subscribe(
      (data) => { 
        this.products = data;
        // console.log('got value ' + data);
        // debugger;
       },
      (err) => { console.error('something wrong occurred: ' + err); },
    );
  }
}
