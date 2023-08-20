import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ChangeTranslateService } from '../services/change-translate.service';
import { MD5 } from 'crypto-js';
import { baseURL_SERVER } from '../compartido/baseurl';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";
  language: String = "";

  constructor(private http:HttpClient, private translateService:ChangeTranslateService){}

  ngOnInit(): void {

  this.language = this.translateService.getLanguage();

  }

  login(): void{

    //Codificamos el password en md5 para enviarlo por Http
    let password_encode = MD5(this.password).toString();

    //Datos a enviar para la autenticación
    let data_send = { username: this.username, password: password_encode };
    let url_login = baseURL_SERVER + "/user/login/";

    this.http.post(url_login, data_send).subscribe(
      (response) => {
        // Manejar respuesta exitosa
      },
      (error) => {
        // Manejar error de inicio de sesión
      }
    );
  }
}
