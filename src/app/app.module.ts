import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductoFilterPipe } from './product/producto-filter.pipe';
import { Ejemplo1Component } from './formularios/ejemplo1/ejemplo1.component';
import { DistanciasComponent } from './formularios/distancias/distancias.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductoFilterPipe,
    Ejemplo1Component,
    DistanciasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
