import { Component } from '@angular/core';

@Component({
  selector: 'app-select-milk',
  templateUrl: './select-milk.component.html',
  styleUrls: ['./select-milk.component.scss']
})
export class SelectMilkComponent {

milkOptions = [
  {name: 'DESNATADO', liters: 100, fabrication:"16/02/2024", selected:false, colorCard:"#D9EED2",colorName:"#9BDDA1", urlImage:"https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-DESNATADO-1.png"},
  {name: 'SEMIDESNATADO', liters: 100, fabrication:"16/02/2024", selected:false, colorCard:"#FFE2E2",colorName:"#F5B1B1", urlImage:"https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-SEMI.png"},
  {name: 'INTEGRAL', liters: 100, fabrication:"16/02/2024", selected:false, colorCard:"#D8E7FF",colorName:"#87C5FD", urlImage:"https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-INTEGRAL.png"},
  {name: 'SEM LACTOSE', liters: 100, fabrication:"16/02/2024", selected:false, colorCard:"#FFF1CD",colorName:"#FBE19E", urlImage:"https://www.italac.com.br/wp-content/uploads/2019/06/LeiteSemi_IN.png"}
];

}
