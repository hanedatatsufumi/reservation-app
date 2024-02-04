import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { products } from '../../products';

@Component({
  selector: 'app-product-listings',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './product-listings.component.html',
  styleUrl: './product-listings.component.scss'
})
export class ProductListComponent {
  products: any;
  
  ngOnInit() {
    this.products = products;
  }
}
