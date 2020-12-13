import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsComponent } from './terms/terms.component';
//import { ArticlesComponent } from './articles/articles.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ArticleDetailsComponent } from './articles/article-details/article-details.component';
import { ProductsComponent } from './products/products/products.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { ArticlesModule } from './articles/articles.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    PrivacyComponent,
    TermsComponent,
    ArticlesComponent,
    ArticleDetailsComponent,
    ProductsComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  //  ArticlesModule,
  //ProductsModule,
    NgbModule,
  ArticlesModule,
  ProductsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
