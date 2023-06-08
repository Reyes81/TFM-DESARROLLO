import { ChangeTranslateService } from '../services/change-translate.service';
import { Component,Input } from '@angular/core';
import { Route, ParamMap  } from '@angular/router';
import { Entidad } from '../compartido/entidad';
import { faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { EntidadService } from '../services/entidad.service';
import { HaspService } from '../services/hasp.service';
import { Feature } from '../compartido/feature';
import { SubFeature } from '../compartido/subFeature';

//const electron = (<any>window).require('electron');
//const shell = electron.shell;
//const hasp = require('./hasp.node');

@Component({
  selector: 'app-detalle-licencia',
  templateUrl: './detalle-licencia.component.html',
  styleUrls: ['./detalle-licencia.component.css']
})
export class DetalleLicenciaComponent {

 @Input () selectedLanguage:string = 'es';

  faCheck = faCircleCheck;
  faClose = faCircleXmark;

  title:String='';
  entidad:Entidad = new Entidad();
  feature:Feature = new Feature("",[-1,-1,-1],[]);
  subFeatures:SubFeature[] = [];
  featureName:String;
  featureVersion:number[];
  featureVersionString:String;
  states:Boolean[]=[];

  constructor( private miServicio:EntidadService,private translateService: TranslateService, private changeTranslateService:ChangeTranslateService, private haspService:HaspService){

    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.changeTranslateService.getLanguage());
    this.featureName ="";
    this.featureVersion = [-1,-1,-1];
    this.featureVersionString = "";

  }

  ngOnInit(): void {
    this.entidad = this.miServicio.getEntidad2();
    this.feature = this.haspService.getFeature(this.entidad.feature);
    this.featureName = this.feature.name;
    this.featureVersion = this.haspService.getFeatureVersion(this.featureName);
    this.featureVersionString = "v."+ this.featureVersion[0] + "," + this.featureVersion[1] + "," + this.featureVersion[2];
    this.subFeatures = this.feature.subFeactures;
    /*
    if(this.subFeatures.length == 0){
      this.haspService.generateSubfeatures();
      this.subFeatures = this.haspService.getSubFeatures();
    }*/
    this.title = this.entidad.name;
  }

  openLink() {
    //const url = 'https://lsymserver.uv.es/mantis/login_page.php'; 
    //shell.openExternal(url);
  }
  }



