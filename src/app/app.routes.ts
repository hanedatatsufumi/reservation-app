import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: '', redirectTo: 'products', pathMatch: 'full' 
    },
    {
        path: 'products',
        // ネストされたルート群をまとめて遅延読み込みする
        loadChildren: () => import('./product/product.routes').then((m) => m.routes),
    },
];
