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
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL_SERVER } from '../compartido/baseurl';
import { MD5 } from 'crypto-js';



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
  feature_installer_client_empty: Boolean = false;
  installers_client_empty = false;
  actual_version: string = "";
  latest_version: string = ""
  latest_installer:any;
  actual_installer:any;

  date_actual_version: string = "";
  date_latest_version: string = "";

  actual_changeLog: string = "";
 

  constructor( private http:HttpClient, private translateService: TranslateService, private changeTranslateService:ChangeTranslateService, private haspService:HaspService){

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
  
      } catch (error) {
        this.errorMessage = "error";
        console.error('Error during subscription:', error);
      }
  }

  async manageVersion(): Promise<void>{

    const latest_date: Date = new Date(this.date_latest_version);
    
    const actual_date: Date = new Date(this.date_actual_version);
    alert(actual_date);
    if(latest_date > actual_date || this.feature_installer_client_empty === true )
    {
      alert(latest_date);
      
      alert("Estamos jodidos")
      this.checkVersion = true;
      this.latest_version = this.latest_installer.version;
    }    
  }

  async updateComponent(): Promise<void>{

    let check: Boolean = false;
    this.feature = this.haspService.getFeature(); 
    this.license = this.haspService.getLicense();
    this.title = this.feature;
    this.path_image = "assets/img/slider/" + this.feature + ".jpg" 

    await this.getLatestInstaller();
    await this.getClientInstallers();

    if(Object.keys(this.client_installers).length === 0){
      this.installers_client_empty = true;
      this.feature_installer_client_empty = true;
    }
    else{
      for (const client_installer of this.client_installers) {
        if (client_installer.feature === this.feature) {
          await this.getLatestInstallerClient();
          this.actual_changeLog = this.actual_installer.changeLog.split('\r\n');
          this.feature_installer_client_empty = false;
          check = true;
        } 
        }
      if (check === false)
      this.feature_installer_client_empty = true;
        
    }

    this.subfeatures = this.haspService.getSubFeatures();
    this.subfeatures_license = this.license.subfeatures;
    this.manageVersion();
  }
  openLink() {
    const url = 'https://lsymserver.uv.es/mantis/login_page.php';
    shell.openExternal(url);
  }

  download() {
    let url = "http://172.17.0.3:80/" + this.latest_version + ".exe";
    
  
    this.http.get(url, { responseType: 'blob' }).subscribe(
      (response: Blob) => {
      // Creamos un objeto Blob y obtenemos su URL
      const blob = new Blob([response], { type: 'application/octet-stream' });
      const blob_url = window.URL.createObjectURL(blob);
      
      // Creamos un enlace temporal para la descarga del instalador
      const link = document.createElement('a');
      link.href = blob_url;
      link.download = this.latest_version + ".exe"; 
      link.click();
      
      // Liberamos recursos después de la descarga
      window.URL.revokeObjectURL(blob_url);

      },
      (error) => {
        console.error('Error en la descarga', error);
      }
    );

    //Actualizamos la base de datos
    let clientNameHash: string = MD5(this.haspService.getClientName()).toString();
    let id_installer: number = this.latest_installer.id;
    
    let url_update = baseURL_SERVER + '/updateInstaller/' + clientNameHash + '/' + id_installer + '/';

    const csrfToken = document.cookie.match(/csrftoken=([^;]*)/);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'X-CSRFToken': csrfToken ? csrfToken[1] : ''
    });

    return this.http.put(url_update, {headers}).subscribe(
      (response) => {
        console.log('Instalador actualizado con éxito', response);
         //Actualizamos el componente
         this.updateComponent();
      },
      (error) => {
        console.error('Error al actualizar el instalador', error);
      }
    );

   
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



