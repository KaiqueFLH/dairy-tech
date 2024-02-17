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
  buttonText?: string = "SIMULAR SENSOR"
  dataOrdenha?: string;


  process = {
    quantidadeEnvasada: 0,
    quantidadeFinal: 0,
    id: 0,
    createdAt: new Date(),
    tipo: "string",
  }



  changePage() {
    this.production = !this.production;
    if (!this.production) {
      this.buttonText = "ENVIAR DADOS"
    } else {
      this.buttonText = "SIMULAR SENSOR"
    }
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
        this.dataOrdenha = new Date(this.process.createdAt).toLocaleDateString();
      },
      (error: any) => {
        this.route.navigate(['/select-milk']);
      }
    );


    const socket = this.websocketService.connect();

    socket.onopen = () => {
      console.log('WebSocket connection established.');
      this.websocketService.sendMessage('INTEGRAL');
    };

    socket.onmessage = (event) => {
      console.log('Message received from server:', event.data);
      this.process = JSON.parse(event.data);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed.');
      // Lógica para lidar com o fechamento da conexão
    };
  }



}
