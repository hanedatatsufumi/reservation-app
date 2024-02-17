import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
// import { importProvidersFrom } from '@angular/core';
// import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';
import { ProductService } from './product/shared/product.service';

export const appConfig: ApplicationConfig = {
  providers: [
    // importProvidersFrom(HttpClientModule),
    provideHttpClient(),
    provideRouter(routes),
    ProductService,
  ],
};
