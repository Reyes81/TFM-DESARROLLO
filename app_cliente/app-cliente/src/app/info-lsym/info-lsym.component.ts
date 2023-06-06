import { Component } from '@angular/core';
import { InfoLsymService } from '../services/info-lsym.service';
import { Info } from '../compartido/info';

@Component({
  selector: 'app-info-lsym',
  templateUrl: './info-lsym.component.html',
  styleUrls: ['./info-lsym.component.css']
})
export class InfoLsymComponent {

  info:Info = new Info();
  errorMensaje:String="";

  constructor(private infoService:InfoLsymService){}

  ngOnInit(){
    this.loadinfo();
  }

  async loadinfo(){

    try {
      const _info = await this.infoService.getInfo().toPromise();
      this.info = _info;
      console.log('Subscription complete:', this.info);
      // Continuar con las acciones posteriores al subscribe
    
    } catch (error) {
      this.errorMensaje = "error";
      console.error('Error during subscription:', error);
    }
  }

}
