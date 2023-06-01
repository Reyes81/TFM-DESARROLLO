import { Injectable } from '@angular/core';
import  {map, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { Observable } from 'rxjs';
import { Noticia } from '../compartido/noticia';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';


@Injectable({
  providedIn: 'root'
})
export class NoticiasService {

  constructor(private http: HttpClient, private procesaHTTPMsjService:ProcesaHTTPMsjService) { }

//Para obtener todas las entidades del JSON
getNoticias(): Observable<Noticia[]>{
  return this.http.get<Noticia[]>(baseURL + '/noticias').pipe(catchError(this.procesaHTTPMsjService.gestionError));
}

getNoticia(id: number): Observable<Noticia>{
  return this.http.get<Noticia>(baseURL + '/noticias/' + id).pipe(catchError(this.procesaHTTPMsjService.gestionError));
}

getNoticiasIds(): Observable<number[] | any>{
  return this.getNoticias().pipe(map(noticias=>noticias.map(noticia=>noticia.id)));
}
}
