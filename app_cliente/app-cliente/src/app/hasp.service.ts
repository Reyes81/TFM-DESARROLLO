import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HaspService {

  state:Boolean;
  constructor() { 

    this.state=false;
  }

  setStateHasp(stateHasp:Boolean){
    this.state = stateHasp;
  }

  getStateHasp():Boolean{
    return this.state;
  }
}
