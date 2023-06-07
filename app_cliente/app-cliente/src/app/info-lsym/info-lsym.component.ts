import { Component } from '@angular/core';
import { InfoLsymService } from '../services/info-lsym.service';
import { Info } from '../compartido/info';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-info-lsym',
  templateUrl: './info-lsym.component.html',
  styleUrls: ['./info-lsym.component.css']
})
export class InfoLsymComponent {

  info:Info = new Info();
  text1: String = "";
  text2: String = "";
  text3: String = "";
  errorMensaje:String = "";
  language: String = "es";

  constructor(private infoService:InfoLsymService, private sharedService:SharedService){}

  ngOnInit(){

    this.sharedService.getLanguageValue().subscribe(language => {
      this.language = language;
      this.loadinfo();
    });
    
    
  }

  async loadinfo(){

    try {
      const _info = await this.infoService.getInfo().toPromise();
      this.info = _info;
      console.log('Subscription complete:', this.info);
      // Continuar con las acciones posteriores al subscribe
      if(this.language == "es"){
        this.text1 = this.info.text1_ES;
        this.text2 = this.info.text2_ES;
        this.text3 = this.info.text3_ES;
      }
      else if(this.language == "en"){
        this.text1 = this.info.text1_EN;
        this.text2 = this.info.text2_EN;
        this.text3 = this.info.text3_EN;
      }
      else if(this.language == "fr"){
        this.text1 = this.info.text1_FR;
        this.text2 = this.info.text2_FR;
        this.text3 = this.info.text3_FR;
      }
      else if(this.language == "po"){
        this.text1 = this.info.text1_PO;
        this.text2 = this.info.text2_PO;
        this.text3 = this.info.text3_PO;
      }
      else{
        this.text1 = this.info.text1_IT;
        this.text2 = this.info.text2_IT;
        this.text3 = this.info.text3_IT;
      }
    
    } catch (error) {
      this.errorMensaje = "error";
      console.error('Error during subscription:', error);
    }
  }

}
