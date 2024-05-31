import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ButtonListComponent } from './button-list/button-list.component';
import { ContianerComponent } from './container/container.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './container/search/search.component';
import { FormsModule } from '@angular/forms';
import { ProductlistComponent } from './container/productlist/productlist.component';
import { ProductComponent } from './container/productlist/product/product.component';
import { FilterComponent } from './container/productlist/filter/filter.component';
@NgModule({
  declarations: [
    AppComponent, HeaderComponent, ButtonListComponent, ContianerComponent , SearchComponent, ProductlistComponent, ProductComponent, FilterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    // provideClientHydration() this is issue
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
