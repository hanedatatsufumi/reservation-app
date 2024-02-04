import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { ActivatedRoute } from '@angular/router';
import { products } from '../../products';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss'
})
export class ProductDetailComponent {
  //プロパティの宣言
  product: any;

  constructor(private route: ActivatedRoute) { }

  // コンポーネントが初期化されるとき（ngOnInit ライフサイクルフック内で）、
  // ActivatedRoute サービスを通じてルートパラメータをサブスクライブします。
  // これにより、コンポーネントは常に最新の情報を取得できます。
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')!];
    });
  }
}