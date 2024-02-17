import { Component } from '@angular/core';
import { EnvaseService } from '../services/envase.service';
import { Router } from '@angular/router';
import { LoteService } from '../services/lote.service';

@Component({
  selector: 'app-select-milk',
  templateUrl: './select-milk.component.html',
  styleUrls: ['./select-milk.component.scss']
})
export class SelectMilkComponent {
  changeSelected(card: any) {
    this.milkOptions.forEach(element => {
      element.selected = false;
    });
    card.selected = !card.selected;
  }

  constructor(
    private envaseService: EnvaseService,
    private route: Router,
    private loteService: LoteService
  ) { }

  ngOnInit() {
    this.envaseService.getEnvasamentoExistente().subscribe(
      (data: any) => {
        this.route.navigate(['/production']);
      },
      (error: any) => {
        this.loteService.getLeites().subscribe(
          (data: any) => {
            let leites = data;
            console.log(leites);
            this.milkOptions.forEach(
              (option) => {
                if (option.name === "INTEGRAL") {
                  option.liters = leites[0].quantidadeLeite;
                } else if (option.name === "SEMIDESNATADO") {
                  option.liters = leites[1].quantidadeLeite;
                } else if (option.name === "DESNATADO") {
                  option.liters = leites[2].quantidadeLeite;
                } else if (option.name === "SEM LACTOSE") {
                  option.liters = leites[3].quantidadeLeite;
                }
              })
          },
          (error: any) => {
            console.log(error);
          }
        );

      }
    );
  }

  milkOptions = [
    { name: 'INTEGRAL', liters: 100, fabrication: "16/02/2024", selected: true, colorCard: "#D8E7FF", colorName: "#87C5FD", urlImage: "https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-INTEGRAL.png" },
    { name: 'DESNATADO', liters: 100, fabrication: "16/02/2024", selected: false, colorCard: "#D9EED2", colorName: "#9BDDA1", urlImage: "https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-DESNATADO-1.png" },
    { name: 'SEMIDESNATADO', liters: 100, fabrication: "16/02/2024", selected: false, colorCard: "#FFE2E2", colorName: "#F5B1B1", urlImage: "https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-SEMI.png" },
    { name: 'SEM LACTOSE', liters: 100, fabrication: "16/02/2024", selected: false, colorCard: "#FFF1CD", colorName: "#FBE19E", urlImage: "https://www.italac.com.br/wp-content/uploads/2019/06/LeiteSemi_IN.png" }
  ];

}
