import { Component } from '@angular/core';
import { EnvaseService } from './services/envase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dairy-tech';

  constructor(private envaseService: EnvaseService, private route : Router) { }

  ngOnInit() {
    this.envaseService.getEnvasamentoExistente().subscribe(
      (data: any) => {
        this.route.navigate(['/production']);
      },
      (error: any) => {
        this.route.navigate(['/select-milk']);
      }
    );
  }
}
