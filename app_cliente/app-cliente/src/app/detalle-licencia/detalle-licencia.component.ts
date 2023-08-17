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
import swal from 'sweetalert2';


const electron = (<any>window).require('electron');
const shell = electron.shell;
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

  title: string = "";
  feature: string = "";
  path_image: string = "";
  client_name: string = "";
  license: any;
  subfeatures_license: string[] = [];
  subfeatures: string[] = [];
  feature_installers: any[] = [];
  client_installers: any[] = [];
  errorMessage: string = "";

  checkVersion: Boolean = false;
  actual_version: string = "";
  latest_version: string = ""
  latest_installer:any;
  actual_installer:any;

  date_actual_version: string = "";
  date_latest_version: string = "";
 

  constructor( private translateService: TranslateService, private changeTranslateService:ChangeTranslateService, private haspService:HaspService){

    this.translateService.setDefaultLang(this.selectedLanguage);

  }

  ngOnInit(): void {
    
    this.updateComponent();

  }

  //Obtenemos el instalador más actual de una feature de un cliente
  async getLatestInstallerClient(): Promise<void>{

    try {
      this.actual_installer = await this.haspService.getLatestClientInstaller();

      console.log('Subscription complete:', this.actual_installer);

      this.actual_version = this.actual_installer.version;
      this.date_actual_version = this.actual_installer.published_date;
  
    } catch (error) {
      this.errorMessage = "error";
      console.error('Error during subscription:', error);
    }
}

  //Obtenemos el instalador más actual de una feature
  async getLatestInstaller(): Promise<void>{

    try {
      this.latest_installer = await this.haspService.getLatestInstaller();
      this.date_latest_version = this.latest_installer.published_date;
      console.log('Subscription complete:', this.latest_installer);
      // Continuar con las acciones posteriores al subscribe
    } catch (error) {
      this.errorMessage = "error";
      console.error('Error during subscription:', error);
    }
}

  //Obtenemos los instaladores de un cliente
  async getClientInstallers(): Promise<void>{

      try {
        this.client_installers = await this.haspService.getClientInstallers();
        console.log('Subscription complete:', this.client_installers);
        // Continuar con las acciones posteriores al subscribe
      } catch (error) {
        this.errorMessage = "error";
        console.error('Error during subscription:', error);
      }
  }


  async manageVersion(): Promise<void>{

    await this.getLatestInstaller();
    await this.getLatestInstallerClient();

    const latest_date: Date = new Date(this.date_latest_version);
    alert(latest_date);
    
    const actual_date: Date = new Date(this.date_actual_version);
    alert(this.date_actual_version);

    if(latest_date > actual_date)
    {
      this.checkVersion = true;
      this.latest_version = this.latest_installer.version;
    }
  }

  async updateComponent(): Promise<void>{

    this.feature = this.haspService.getFeature(); 
    this.license = this.haspService.getLicense();
    //this.getClientInstallers();
    

    this.subfeatures = this.haspService.getSubFeatures();
    this.subfeatures_license = this.license.subfeatures;
     
    this.title = this.feature;
    this.path_image = "assets/img/slider/" + this.feature + ".jpg" 

    this.manageVersion();
  }
  openLink() {
    const url = 'https://lsymserver.uv.es/mantis/login_page.php';
    shell.openExternal(url);
  }

  install(): void{
    swal.fire('En desarrollo', 'Instalará la nueva actualización', 'success');
  }

  changeLog(): void{
    

    let changeLog:string = this.latest_installer.changeLog;
    const lineas = changeLog.split('\r\n');
    const mensaje = lineas.join('<br/>'); 
    
    swal.fire({
      title: 'ChangeLog ' + this.latest_version,
      html: mensaje,
      icon: 'info',
    });
    
  }
  }



