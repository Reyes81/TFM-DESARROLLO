import { Component, OnInit, Inject, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import{ faBars,faHome, faInfo, faSignIn, faList, faAddressCard, faSignOut, faNewspaper} from'@fortawesome/free-solid-svg-icons';
import { ChangeTranslateService } from '../services/change-translate.service';
import { TranslateService } from '@ngx-translate/core';
import { HaspService } from '../services/hasp.service';
import { SharedService } from '../services/shared.service';
import { NoticiasService } from '../services/noticias.service';
import { SessionService } from '../services/session.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {

  faHome = faHome;
  faInfo = faInfo;
  faNewspaper = faNewspaper;
  faList = faList;
  faAddressCard = faAddressCard;
  faBars= faBars;
  faSignIn = faSignIn;
  faSignOut = faSignOut;
  clientName:string;
  isChecked:boolean = false;
  isLogin: Boolean = false;

  lang:string='es';

  constructor(private sessionService: SessionService,private chageTranslateService:ChangeTranslateService, private translateService:TranslateService,
 private haspService:HaspService, private sharedService:SharedService, private noticiasService:NoticiasService, private router: Router, private changeDetector: ChangeDetectorRef) {

    this.translateService.setDefaultLang(this.lang);
    this.clientName="";

    this.sessionService.username$.subscribe(username => {
      this.clientName = username;
    });
  
    this.sessionService.isLogin$.subscribe(isLogin => {
      this.isLogin = isLogin;
    });

    if(!this.isLogin)
    {
      this.haspService.removeFeatures();
      this.haspService.removeSubFeatures();
      this.haspService.removeClientName();
    }

  }

  ngOnInit(): void {

  }

  changeLanguage(lang:string){
    this.translateService.use(lang);
    this.chageTranslateService.setLanguage(lang);
    this.sharedService.updateLanguageValue(lang);
  }

  updateInitComponent(): void {

    this.sharedService.updateCheckboxValue(this.isChecked);

    this.haspService.setStateHasp(this.isChecked);

   
    //Cambiar lógica  por isLogin

    //if(this.isChecked==true){
        //this.haspService.generateClientName()      
        //this.clientName = this.haspService.getClientName();
        //this.haspService.generateFeatures();
    //}

    //else{
        //this.haspService.removeFeatures();
        //this.haspService.removeSubFeatures();
      //  this.haspService.removeClientName();
    //}

    this.changeDetector.detectChanges();
  }

  goToNews(option: string): void{
    
    this.noticiasService.setOption(option);
   
    if(option=='date')
      this.router.navigate(["/noticias-fecha"]);
    else 
    {
      this.changeDetector.detectChanges();
      this.router.navigate(["/noticias"]);
    }
  }

  logOut(): void{
    this.sessionService.setStateLogin(false);
    this.router.navigate(['/inicio']);
  }

}
