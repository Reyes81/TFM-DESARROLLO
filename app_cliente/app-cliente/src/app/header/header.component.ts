import { Component, OnInit, Inject } from '@angular/core';
import{ faBars,faHome, faInfo, faList, faAddressCard,faSignInAlt} from'@fortawesome/free-solid-svg-icons';
import { ChangeTranslateService } from '../services/change-translate.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faHome = faHome;
  faInfo = faInfo;
  faList = faList;
  faAddressCard = faAddressCard;
  faBars= faBars;
  faSignInAlt = faSignInAlt;

  lang:string='es';

  constructor(@Inject('baseURL') public BaseURL:string, private chageTranslateService:ChangeTranslateService, private translateService:TranslateService) {
    this.translateService.setDefaultLang(this.lang);

  }

  ngOnInit(): void {
  }

  changeLanguage(lang:string){
    this.translateService.use(lang);
    this.chageTranslateService.setLanguage(lang);

}
}
