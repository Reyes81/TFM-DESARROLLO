import { Component, Input } from '@angular/core';
import { HaspService } from '../hasp.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

  constructor(private haspService:HaspService) {
    this.isHasp = false;
  }
  isHasp: Boolean;
  element:Boolean = false;
  updateStateHasp(state:any): void{
    this.isHasp=state;

  }

}
