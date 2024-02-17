import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket!: WebSocket;

  constructor() { }

  connect(): WebSocket {
    this.socket = new WebSocket("ws://localhost:433");
    return this.socket;
  }

  sendMessage(message: string) {
    if (this.socket.readyState === WebSocket.OPEN) {
      this.socket.send(message);
    } else {
      console.error('WebSocket is not open.');
    }
  }

  close() {
    this.socket.close();
  }
}
