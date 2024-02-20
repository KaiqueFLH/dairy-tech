import { Component } from '@angular/core';
import { WebSocketService } from '../services/web-socket.service';
import { EnvaseService } from '../services/envase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent {
  production?: boolean = true
  time?: string = "00:00:00";

  process = {
    quantidadeEnvasada: 0,
    quantidadeFinal: 0,
    id: 0,
    dataOrdenha: "",
    origem: "",
    tipo: "string",
    createdAt: "",
    updatedAt: "",
  }

  constructor(
    private websocketService: WebSocketService,
    private envaseService: EnvaseService,
    private route: Router
  ) { }

  ngOnInit() {
    this.envaseService.getEnvasamentoExistente().subscribe(
      (data: any) => {
        this.process = JSON.parse(data);
      },
      (error: any) => {
        this.route.navigate(['/select-milk']);
      }
    );


    const socket = this.websocketService.connect();

    socket.onopen = () => {
      this.websocketService.sendMessage('INTEGRAL');
    };

    socket.onmessage = (event) => {
      this.process = JSON.parse(event.data);
      if (this.process.quantidadeEnvasada == this.process.quantidadeFinal) {
        const createdAt = new Date(this.process.createdAt);
        const updatedAt = new Date(this.process.updatedAt);

        const timeDifference = updatedAt.getTime() - createdAt.getTime();

        if (!isNaN(timeDifference)) {
          const seconds = Math.floor((timeDifference / 1000) % 60);
          const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
          const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
          if (seconds < 10) {
            this.time = hours + "0:0" + minutes + ":0" + seconds;
          } else {
            this.time = hours + "0:0" + minutes + ":" + seconds;
          }
          this.production = false;
        } else {
          console.log("Invalid timestamps, unable to calculate time difference.");
        }
      }
    };

    socket.onclose = () => {
      // Lógica para lidar com o fechamento da conexão
    };
  }

}
