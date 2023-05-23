import { Injectable } from '@angular/core';
import { Entidad } from '../compartido/entidad';

@Injectable({
  providedIn: 'root'
})
export class MiServicioService {

  entidad:Entidad = new Entidad();
  constructor() { }

  public setEntidad(entity:Entidad){
    this.entidad = entity;
  }

  public getEntidad():Entidad{
    return this.entidad;
  }
}
