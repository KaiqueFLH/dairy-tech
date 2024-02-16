import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductionComponent } from './production/production.component';
import { ProductionModule } from './production/production.module';
import { SelectMilkComponent } from './select-milk/select-milk.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductionComponent,
    SelectMilkComponent
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
