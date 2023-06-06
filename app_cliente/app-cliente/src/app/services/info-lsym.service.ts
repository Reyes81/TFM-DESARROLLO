import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../compartido/baseurl';
import { Injectable } from '@angular/core';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';
import { Info } from '../compartido/info';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class InfoLsymService {

  constructor(private http: HttpClient, private procesaHTTPMsjService:ProcesaHTTPMsjService) { 

  }

   //Para obtener los textos de Sobre LSyM del JSON
   getInfo(): Observable<Info>{
    return this.http.get<Info>(baseURL + '/info').pipe(catchError(this.procesaHTTPMsjService.gestionError));
  }
}
