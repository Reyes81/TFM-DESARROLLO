import { Component, Input } from '@angular/core';
import { HaspService } from '../services/hasp.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

  @Input() isHasp:Boolean;
  constructor(private haspService:HaspService) {
    this.isHasp = false;
  }
 
  ngOnInit(): void {

    this.isHasp = this.haspService.getStateHasp()  
    this.haspService.getSubFeature("F_EXERCICEEDITOR");
  }

}
