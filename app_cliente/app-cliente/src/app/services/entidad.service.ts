import { Injectable } from '@angular/core';
import  {map, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { Observable } from 'rxjs';
import { Entidad } from '../compartido/entidad';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';

@Injectable({
  providedIn: 'root'
})
export class EntidadService {

  constructor(private http: HttpClient, private procesaHTTPMsjService:ProcesaHTTPMsjService) { }

  //Para obtener todas las entidades del JSON
  getEntidades(): Observable<Entidad[]>{
    return this.http.get<Entidad[]>(baseURL + '/entidades').pipe(catchError(this.procesaHTTPMsjService.gestionError));
  }

  getEntidad(id: number): Observable<Entidad>{
    return this.http.get<Entidad>(baseURL + '/entidades/' + id).pipe(catchError(this.procesaHTTPMsjService.gestionError));
  }

  getEntidadesIds(): Observable<number[] | any>{
    return this.getEntidades().pipe(map(entidades=>entidades.map(entidad=>entidad.id)));
  }
}
