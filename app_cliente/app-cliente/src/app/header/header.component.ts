import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import{ faBars,faHome, faInfo, faList, faAddressCard,faSignInAlt, faNewspaper} from'@fortawesome/free-solid-svg-icons';
import { ChangeTranslateService } from '../services/change-translate.service';
import { TranslateService } from '@ngx-translate/core';
import { Hasp } from '../compartido/hasp';
import { HaspService } from '../hasp.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  hasp = new Hasp();
  faHome = faHome;
  faInfo = faInfo;
  faNewspaper = faNewspaper;
  faList = faList;
  faAddressCard = faAddressCard;
  faBars= faBars;
  faSignInAlt = faSignInAlt;
  clientName:String;

  isChecked:Boolean = false;

  lang:string='es';

  constructor(@Inject('baseURL') public BaseURL:string, private chageTranslateService:ChangeTranslateService, private translateService:TranslateService,
 private haspService:HaspService) {

    this.translateService.setDefaultLang(this.lang);
    this.clientName="";

  }

  ngOnInit(): void {
    
  }

  changeLanguage(lang:string){
    this.translateService.use(lang);
    this.chageTranslateService.setLanguage(lang);
  }

  updateInitComponent(): void {

    this.haspService.setStateHasp(this.isChecked);

    if(this.isChecked==true){
        this.clientName = this.haspService.getClientName();
        this.haspService.generateFeatures();
        this.haspService.generateSubfeatures();
    }
    
    else{
        this.haspService.removeFeatures();
        this.haspService.removeClientName();
    }
      
      
  }

  gotoNews(option:Number){}
}
