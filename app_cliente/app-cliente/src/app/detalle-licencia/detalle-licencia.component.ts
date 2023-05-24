import { ChangeTranslateService } from '../services/change-translate.service';
import { Component,Input } from '@angular/core';
import { Route, ParamMap  } from '@angular/router';
import { Entidad } from '../compartido/entidad';
import { faCircleCheck, faCircleXmark} from '@fortawesome/free-solid-svg-icons';
import { TranslateService } from '@ngx-translate/core';
import { EntidadService } from '../services/entidad.service';
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

  constructor( private miServicio:EntidadService,private translateService: TranslateService, private changeTranslateService:ChangeTranslateService){

    this.translateService.setDefaultLang(this.selectedLanguage);
    this.translateService.use(this.changeTranslateService.getLanguage());

  }

  ngOnInit(): void {
    this.entidad = this.miServicio.getEntidad2();
    this.title = this.entidad.name;
  }
}


