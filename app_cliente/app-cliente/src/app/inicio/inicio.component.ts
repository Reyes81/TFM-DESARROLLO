import { Component, Input } from '@angular/core';
import { HaspService } from '../services/hasp.service';
import { SharedService } from '../services/shared.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

 checkboxValue:boolean = false; 
  constructor(private haspService:HaspService, private sharedService:SharedService) {
    
  }
 
  ngOnInit(): void {
    this.sharedService.getCheckboxValue().subscribe(value => {
      this.checkboxValue = value;
    });
  }
}
