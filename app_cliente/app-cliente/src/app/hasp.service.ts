import { Injectable } from '@angular/core';
import { Feature } from './compartido/feature';
import { SubFeature } from './compartido/subFeature';

@Injectable({
  providedIn: 'root'
})
export class HaspService {

  id: number;
  clientname: String;
  clientNames: String[];
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



  constructor(){

      this.id=-1;
      this.lastFeatureIndex = -1;
      this.featureIndex = -1;
      this.clientname="";
      this.clientNames = ["CEDUC", "SEVASA", "FLC","PSC", "ARCELLOR"];

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

  removeFeatures():void{
    this.featuresActives=[];
  }

  //Simulamos la lectura aleatoria de una feature del Hasp y generamos una versión ficticia
  //Los números de versión en el Hasp van de 1 a 127
  generateFeatureHasp(index:number):Feature{
    var versionHasp:number[] = [0,0,0];
      for (let i=0;i<3;i++){
          var number = Math.floor(Math.random() * 127);
          versionHasp[i] = number;
      }
      var featureHasp = new Feature(this.features[index],versionHasp);
      return featureHasp;
      //this.featuresHasp.set("name",this.features[index]);
      //this.featuresHasp.set("version",this.versionHasp);
  }

  //Simulamos las subfeatures activas mediante un booleano generado de manera aleatoria
  generateSubfeatures():void{
      const randomBoolean = Math.random() >= 0.5;
      for (let i=0;i< this.subFeatures.length; i++){
          const randomBoolean = Math.random() >= 0.5;
          var subFeature = new SubFeature(this.subFeatures[i],randomBoolean);
          this.subfeaturesState.push(subFeature);
      }
  }

  getSubFeaturesState():SubFeature[]{
    return this.subfeaturesState;
  }

  getSubFeatures():String[]{
    return this.subFeatures;
  }

  getFeature(featureName:String):Feature{
    
    var feature = new Feature("",[0,0,0]);
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

  getClientName():String{
      var index = Math.floor(Math.random() * this.clientNames.length)
      this.clientname = this.clientNames[index];
      return this.clientname
  }

  removeClientName():void{
      this.clientname = "";
  }

  setStateHasp(state:Boolean):void{
    this.isChecked = state;
  }

  getStateHasp():Boolean{
    return this.isChecked;
  }
}
