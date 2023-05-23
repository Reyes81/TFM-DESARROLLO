import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChangeTranslateService {

  language:string='es';

  constructor() { }

  setLanguage(lan:string){
    this.language = lan;
  }

  getLanguage(): string{
    return this.language;
  }
}
