import { Component } from '@angular/core';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent {

    production ?: boolean = true
    buttonText ?: String = "SIMULAR SENSOR"

    changePage(){
      this.production = !this.production;
      if(!this.production){
        this.buttonText ="ENVIAR DADOS"
      }else {
        this.buttonText ="SIMULAR SENSOR"
      }
    }

}
