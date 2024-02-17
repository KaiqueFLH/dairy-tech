import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoteService {

  constructor(private http : HttpClient) { }

  getLeites(){
    return this.http.get('http://localhost:3000/leites-informacoes');
  }
}
