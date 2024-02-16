import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductionComponent } from './production/production.component';
import { ProductionModule } from './production/production.module';

@NgModule({
  declarations: [
    AppComponent,
    ProductionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
