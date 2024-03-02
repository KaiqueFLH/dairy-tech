import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EnvaseService {

  constructor(private http : HttpClient) { }

  getEnvasamentoExistente(){
    return this.http.get('http://localhost:3000/envase-existente');
  }

  iniciarEnvase(tipo: string){
    let params = new HttpParams().set('tipo', tipo);
    return this.http.put('http://localhost:3000/iniciar-processo', null, { params });
  }

  sendQuantidadeLeite(idEnvase: number){
    console.log(idEnvase);
    let params = new HttpParams().set('idEnvase', idEnvase);
    
    return this.http.put('http://localhost:3000/enviar-setor-5', null, {params});
  }
}
