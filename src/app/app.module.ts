import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductionComponent } from './production/production.component';
import { SelectMilkComponent } from './select-milk/select-milk.component';
import { CommonModule } from '@angular/common';
import { WebSocketService } from './services/web-socket.service';
import { EnvaseService } from './services/envase.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductionComponent,
    SelectMilkComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    WebSocketService,
    EnvaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
