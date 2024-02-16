import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectMilkComponent } from './select-milk/select-milk.component';
import { ProductionComponent } from './production/production.component';

const routes: Routes = [
  { path: "select-milk", component: SelectMilkComponent },
  { path: "production", component: ProductionComponent },
  { path: "", redirectTo: "/select-milk", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
