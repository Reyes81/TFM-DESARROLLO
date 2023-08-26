import { Component, Input } from '@angular/core';
import { HaspService } from '../services/hasp.service';
import { SharedService } from '../services/shared.service';
import { SessionService } from '../services/session.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})

export class InicioComponent {

 checkboxValue:boolean = false; 
 checkLoginValue: Boolean = false;
  constructor(private sessionService: SessionService,private haspService:HaspService, private sharedService:SharedService) {
    
  }
 
  ngOnInit(): void {
    this.sharedService.getCheckboxValue().subscribe(value => {
      this.checkboxValue = value;
    });

    this.sessionService.getStateLogin().subscribe(value => {
      this.checkLoginValue = value;
    });
  }
}
