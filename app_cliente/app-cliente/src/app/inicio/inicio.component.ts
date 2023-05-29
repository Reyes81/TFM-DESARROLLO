import { Component, Input } from '@angular/core';
import { HaspService } from '../hasp.service';
import { Hasp } from '../compartido/hasp';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

  hasp:Hasp = new Hasp();

  @Input() isHasp:Boolean;
  constructor(private haspService:HaspService) {
    this.isHasp = false;
  }
 
  ngOnInit(): void {

    this.isHasp = this.haspService.getStateHasp()  
    this.hasp.getSubfeaturesActive();
  }

}
