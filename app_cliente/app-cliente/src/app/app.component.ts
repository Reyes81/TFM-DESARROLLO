import { Component } from '@angular/core';
import { HaspService } from './hasp.service';
import { EntidadService } from './services/entidad.service';
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

  constructor(private haspService:HaspService,private entidadesService:EntidadService) {

  }

  ngOnInit(): void {
    this.setRandomEntitys();
  }

  setRandomEntitys():void{

    this.entidadesService.getEntidades().subscribe(entidades => this.entidadesArray=entidades,  errorMensaje=> this.errorMensaje= <any>errorMensaje);
    alert(this.entidadesArray.length);
    var index = Math.floor(Math.random() * this.entidadesArray.length);

    for (let i=0; i<index; i++){
      this.entidadesSel.push(this.entidadesArray[i]);
    }
    this.entidadesService.setEntidades(this.entidadesSel);
    
  };
}
