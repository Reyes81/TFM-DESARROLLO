import { Consulta } from '../compartido/consulta';
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../compartido/baseurl';
import { HttpHeaders } from '@angular/common/http';
import { map, catchError, } from 'rxjs/operators';
import { ProcesaHTTPMsjService } from './procesa-httpmsj.service';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';

const httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  'Authorization': 'my-auth-token'
  })
  };

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  titularSwal:string='';

  constructor(private http:HttpClient, @Inject('baseURL') public BaseURL:string, private procesaHttpmsjService: ProcesaHTTPMsjService) { }

  enviarConsulta(consulta:Consulta): Observable<Consulta>{
    swal.fire('Consulta Enviada', 'Su consulta se ha enviado con éxito', 'success');
    return this.http.post<Consulta>(baseURL + '/consultas', consulta, httpOptions).pipe(catchError(this.procesaHttpmsjService.gestionError));
  }
}
