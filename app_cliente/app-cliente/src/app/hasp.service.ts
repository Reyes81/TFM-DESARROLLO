import { Injectable } from '@angular/core';
import { Feature } from './compartido/feature';

@Injectable({
  providedIn: 'root'
})
export class HaspService {

  state:Boolean;
  features:Feature[]=[];
  constructor() { 

    this.state=false;
  }

  setStateHasp(stateHasp:Boolean){
    this.state = stateHasp;
  }

  getStateHasp():Boolean{
    return this.state;
  }

  setFeatures(features:Feature[]){
    this.features = features;
  }

  getFeatures():Feature[]{

    return this.features;
  }
}
