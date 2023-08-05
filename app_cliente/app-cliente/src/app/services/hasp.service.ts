import { Injectable } from '@angular/core';
import { Feature } from '../compartido/feature';
import { SubFeature } from '../compartido/subFeature';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';
import { baseURL_SERVER } from '../compartido/baseurl';
import  {catchError} from 'rxjs/operators';
import { MD5 } from 'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class HaspService {

  id: number;
  clientName: string;
  clientNames: string[];
  environments: String[];
  features: String[];
  featuresAll: String[];
  subFeatures: String[];
  featuresHasp = new Map();
  subfeaturesState:SubFeature[] = [];
  featuresActives:Feature[]=[];
  lastFeatureIndex:number;
  featureIndex:number;
  isChecked:Boolean = false;
  licenses:any[] = [];
  license:any;
  licensesNumbers: string[] = [];
  licenseNumber: string = "";

  constructor(private http: HttpClient, private procesaHTTPMsjService:ProcesaHTTPMsjService){

      this.id=-1;
      this.lastFeatureIndex = -1;
      this.featureIndex = -1;
      this.clientName="";
      this.clientNames = [];

      this.environments = ["Harbour", "Quarry", "Mine", "Warehouse"];

      this.featuresAll = ["F_DEFAULT","F_PORTICO","F_TRASTAINER","F_REACHSTACKER","F_MOVIL","F_RORO","F_RETRO","F_TORRE","F_CONTROL","F_FORKLIFT","F_TELEHANDLER",
                   "F_DUMPER","F_WHEELDOZER","F_BULLDOZER","F_WHEELLOADER","F_SCOOP","F_GRADER","F_EXCAVATOR","F_MOBILECRANE","F_AGROTRACTOR","F_INSTRUCTORTORRE",
                   "F_HEAVYFORKLIFT","F_RMG","F_DRILLINGJUMBO","F_ESHOVEL","F_STRADDLE","F_ECH","F_HARVESTER","F_BRIDGECRANE","F_SPC","F_LASTFEATURE"];

      //Sólo para las features de Harbour para el TFM
      this.features=["F_PORTICO","F_TRASTAINER","F_REACHSTACKER","F_MOVIL","F_RORO","F_HEAVYFORKLIFT","F_RMG","F_STRADDLE","F_ECH"];

      this.subFeatures = ["F_MOTIONPLATFORM","F_STEREOSCOPIC","F_MULTIDISPLAY","F_USERSDATABASE","F_EVALUATION","F_TRACKER","F_REMOTEINSTRUCTOR","F_DEBRIEFING",
                          "F_REMOTEDATABASE","F_HIDCONTROLS","F_EXERCICEEDITOR","F_COLLABORATIVE","F_SENDINFOLSYM","F_OCULUS","F_THEORY", "F_NOTIMESYNC",
                          "F_SIMOCRANE"];

  }

  ///////////////////////////////////////////
  //                                       //
  //              FEATURES                 //
  //                                       //
  ///////////////////////////////////////////
 /*
  //Crea un array de features
  generateFeatures():Feature[]{

    //Crear indice random
    var index = Math.round(Math.random() * (this.features.length - 3) + 3);
    var numeros:number[] =[];
      for(let i=0; i<index; i++){

          do{
              this.featureIndex = Math.floor(Math.random() * this.features.length)
            }while(numeros.includes(this.featureIndex));

          numeros.push(this.featureIndex);
          var newFeature = this.generateFeatureHasp(this.featureIndex);
          this.featuresActives.push(newFeature);
      }
      for(let j=0;j< this.featuresActives.length;j++){
      }
      return this.featuresActives;
  }

  //Devuelve todas las features generadas
  getFeatures():Feature[]{
      return this.featuresActives;
  }

 
  //Simulamos la lectura aleatoria de una feature del Hasp y generamos una versión ficticia
  //Los números de versión en el Hasp van de 1 a 127
  generateFeatureHasp(index:number):Feature{
    var versionHasp:number[] = [0,0,0];

      for (let i=0;i<3;i++){
          var number = Math.floor(Math.random() * 127);
          versionHasp[i] = number;

      }
      this.generateSubfeatures();
      var featureHasp = new Feature(this.features[index],versionHasp,this.subfeaturesState);
      this.subfeaturesState = []
      return featureHasp;
  }

  
  getFeature(featureName:String):Feature{

  var _subFeatures:SubFeature[] = [];
    var feature = new Feature("",[0,0,0],_subFeatures);
    for(let i=0; i<this.featuresActives.length; i++) {
      if(this.featuresActives[i].name == featureName)
        feature = this.featuresActives[i];
    }

    return feature;
  }
  //Consulta de una feature: Si tiene licencia devuelve la versión de la feature y en caso contrario [-1,-1,-1]
  getFeatureVersion(featureName:String): number[]{

      var versionFeature:number[]=[0,0,0];

      for (let i=0;i<this.featuresActives.length; i++){
        if(featureName == this.featuresActives[i].name){
          versionFeature = this.featuresActives[i].version;
      }

      }

      return versionFeature;
  }
*/
  getFeatureIndex(featureName:String):number{

      var index:number=-1;
      for(let i=0; i<this.subFeatures.length; i++)
      {
          if (featureName==this.subFeatures[i]){
              index = i;
              break;
          }
      }
      return index;
  }

  removeFeatures():void{
    this.featuresActives=[];
  }

  ///////////////////////////////////////////
  //                                       //
  //            SUB-FEATURES               //
  //                                       //
  ///////////////////////////////////////////

  //Simulamos las subfeatures activas mediante un booleano generado de manera aleatoria
  generateSubfeatures():void{
    const randomBoolean = Math.random() >= 0.5;
    for (let i=0;i< this.subFeatures.length; i++){
      const randomBoolean = Math.random() >= 0.5;
      var subFeature = new SubFeature(this.subFeatures[i],randomBoolean);
      this.subfeaturesState.push(subFeature);
    }
  }

  getSubFeatures():SubFeature[]{
    return this.subfeaturesState;
  }

  //Consulta de una subfeature: Devuelve true si está activa o false en caso contrario
  getSubFeature(subFeatureName:String):Boolean{

    var state:Boolean = false;
    for(let i=0;i<this.subfeaturesState.length;i++)
    {
      if(this.subfeaturesState[i].name = subFeatureName)
        state = this.subfeaturesState[i].state;
    }

    return state;
  }

  removeSubFeatures():void{
    this.subfeaturesState = [];
  }

  getClientsNames() {
    return this.http.get<any[]>(baseURL_SERVER + '/clientsNames/');
  }

  generateClientName(): void{
    this.getClientsNames().subscribe(
      (data: any[]) => {
        this.clientNames = data;
      },
      (error) => {
        console.error('Error al obtener los nombres de los clientes:', error);
      }
    );

    var index = Math.floor(Math.random() * this.clientNames.length)
    this.clientName = this.clientNames[index];
    
  }

  getClientName(): string{
    return this.clientName;
  }

  getClientLicenses(): Promise<any[]>{

    // Codificar el nombre del client
   
    let clientNameHash: string = MD5(this.getClientName()).toString();

    let url = baseURL_SERVER + '/getLicensesByClientName/' + clientNameHash;

    return this.http.get<any[]>(url)
      .toPromise() 
      .then((data: any[]) => {
        this.licenses = data;
        return data;
      })
      .catch((error) => {
        console.error('Error al obtener las licencias:', error);
        return [];
      });
  }

  //Devuelve el objeto JSON que coincide con el número de licencia que se le pasa por parámetro
  getClientLicense(number_license: string): any{

    return this.licenses.find((license) => license.license_number === number_license);

  }

  //Guardamos un número de licencia
  setLicenseNumber(number_license: string): void{
    this.licenseNumber = number_license;
  }

  //Devolvemos el número de licencia almacenado
  getLicenseNumber(): string{
    return this.licenseNumber;
  }

  //Devuelve todos los números de licencia correspondientes a las licencias de un cliente
  getLicensesNumbers(): string[]{

    this.licensesNumbers = this.licenses.map((item) => item.license_number);
    return this.licensesNumbers;
    
  }

  //Guardamos una licencia concreta
  setLicense(license:any): void{
      this.license = license;
  }

  //Devolvemos una licencia concreta
  getLicense():any{
    return this.license;
  }
  
    
  /*
  getClientsName():string{
    this.http.get<any>(baseURL_SERVER + '/clientsNames/').pipe(catchError(error => {
      console.error('Error al obtener los nombres de los clientes:', error);
      return [];})).subscribe(
        (data: any) => {
          this.clientNames = data;
        }
      );
    alert(this.clientNames);
    var index = Math.floor(Math.random() * this.clientNames.length)
    this.clientname = this.clientNames[index];
    return this.clientname
  }
*/
  removeClientName():void{
      this.clientName = "";
  }

  setStateHasp(state:Boolean):void{
    this.isChecked = state;
  }

  getStateHasp():Boolean{
    return this.isChecked;
  }
}
