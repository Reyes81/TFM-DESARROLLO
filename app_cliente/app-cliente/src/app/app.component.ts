import { Component } from '@angular/core';

import { Entidad } from './compartido/entidad';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-cliente';
    entidadesArray: Entidad[] = [];
    entidadesSel: Entidad[] = [];
    entidad:Entidad = new Entidad();
    errorMensaje: string= "";

  constructor() {

  }

}
