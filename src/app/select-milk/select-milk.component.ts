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
  selectedCard!: any;

  changeSelected(card: any) {
    this.milkOptions.forEach(element => {
      element.selected = false;
    });
    card.selected = !card.selected;
    this.selectedCard = card;
    console.log(this.selectedCard);
    
  }

  constructor(
    private envaseService: EnvaseService,
    private route: Router,
    private loteService: LoteService
  ) {
    this.selectedCard = this.milkOptions[0];

   }

  ngOnInit() {
    this.envaseService.getEnvasamentoExistente().subscribe(
      (data: any) => {
        this.route.navigate(['/production']);
      },
      (error: any) => {
        this.loteService.getLeites().subscribe(
          (data: any) => {
            let leites = data;
            
            this.milkOptions.forEach(
              (option) => {
                let index = 5;
                if (option.name === "INTEGRAL") {
                  index = 0;
                } else if (option.name === "SEMIDESNATADO") {
                  index = 1;
                } else if (option.name === "DESNATADO") {
                  index = 2;
                } else if (option.name === "SEM LACTOSE") {
                  index = 3;
                }
                option.liters = leites[index].quantidadeLeite;
                if(option.liters !== 0){
                  option.origem = leites[index].origem;
                  option.fabrication = leites[index].dataOrdenha;
                }

              })
          },
          (error: any) => {
            console.log("Teste" + error);
          }
        );

      }
    );
  }

  milkOptions: any[] = [
    { name: 'INTEGRAL', liters: 0, fabrication: "", origem: "", selected: true, colorCard: "#D8E7FF", colorName: "#87C5FD", urlImage: "https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-INTEGRAL.png" },
    { name: 'DESNATADO', liters: 0, fabrication: "", origem: "", selected: false, colorCard: "#D9EED2", colorName: "#9BDDA1", urlImage: "https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-DESNATADO-1.png" },
    { name: 'SEMIDESNATADO', liters: 0, fabrication: "", origem: "", selected: false, colorCard: "#FFE2E2", colorName: "#F5B1B1", urlImage: "https://www.italac.com.br/wp-content/uploads/2015/05/AF-3D-LEITE-SEMI.png" },
    { name: 'SEM LACTOSE', liters: 0, fabrication: "", origem: "", selected: false, colorCard: "#FFF1CD", colorName: "#FBE19E", urlImage: "https://www.italac.com.br/wp-content/uploads/2019/06/LeiteSemi_IN.png" }
  ];

  hasLitters(): boolean{   
    return this.selectedCard.liters == 0;
  }

  iniciarProcesso() {
    if(!this.hasLitters()){
      this.envaseService.iniciarEnvase(this.selectedCard.name).subscribe(
        (data: any) => {
          this.route.navigate(['/production']);
        },
        (error: any) => {
          console.log("Teste" + error);
        }
        );
    }
  }

}
