import { Injectable } from '@angular/core';
import  {map, catchError} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { baseURL_SERVER } from '../compartido/baseurl';
import { BehaviorSubject, Observable } from 'rxjs';
import { Noticia } from '../compartido/noticia';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';



@Injectable({
  providedIn: 'root'
})



export class NoticiasService {

  news_list: any[] = [];
  errorMessage: string = "";
  option = new BehaviorSubject<string>('');
  date: string = "";

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

//Fijamos la opción que se marca en la cabecera
setOption(option_news:string): void{
  this.option.next(option_news);
}

//Devolvemos la opción fijada desde la cabecera
getOption():  Observable<string>{
  return this.option.asObservable();
}

//Fijamos la fecha de búsqueda
setNewsDate(date_news:string): void{
  this.date = date_news;
}

//Devolvemos la fecha
getNewsDate(): string{
  return this.date;
}

//Obtenemos todas las noticias
getAllNews(): Promise<any[]>{
   
 let url = baseURL_SERVER + '/getAllNews/';

  return this.http.get<any[]>(url)
    .toPromise() 
    .then((data: any[]) => {
      this.news_list = data;
      return this.news_list;
    })
    .catch((error) => {
      console.error('Error al obtener las noticias:', error);
      return [];
    })
}

//Obtenemos todas las noticias por fecha
getNewsByDate(date: string): Promise<any[]>{
   
  let url = baseURL_SERVER + '/getNewsByDate/' + date;
 
   return this.http.get<any[]>(url)
     .toPromise() 
     .then((data: any[]) => {
       this.news_list = data;
       return this.news_list;
     })
     .catch((error) => {
       console.error('Error al obtener las noticias:', error);
       return [];
     })
 }

 //Obtenemos todas las noticias por tipo
getNewsByType(type: string): Promise<any[]>{
   
  let url = baseURL_SERVER + '/getNewsByType/' + type;
 
   return this.http.get<any[]>(url)
     .toPromise() 
     .then((data: any[]) => {
       this.news_list = data;
       return this.news_list;
     })
     .catch((error) => {
       console.error('Error al obtener las noticias:', error);
       return [];
     })
 }

}
