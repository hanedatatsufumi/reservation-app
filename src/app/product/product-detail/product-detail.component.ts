import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  //プロパティの宣言
  product: any;

  constructor(
    private route: ActivatedRoute, 
    private productService: ProductService
    ) { };
  
  // コンポーネントが初期化されるとき（ngOnInit ライフサイクルフック内で）、
  // ActivatedRoute サービスを通じてルートパラメータをサブスクライブします。
  // これにより、コンポーネントは常に最新の情報を取得できます。
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // this.product = products[+params.get('productId')!];
      // this.product = this.productService.getProductById(params.get('productId')!);

      const productObservable = this.productService.getProductById(params.get('productId')!);

      productObservable.subscribe(
        (data) => { 
          this.product = data;
          // debugger
        },
        (err) => { 
          console.error('something wrong occurred: ' + err); 
        }, 
      );
    });
  }
}
