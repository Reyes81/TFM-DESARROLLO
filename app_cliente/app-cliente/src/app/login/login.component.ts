import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ChangeTranslateService } from '../services/change-translate.service';
import { MD5 } from 'crypto-js';
import { baseURL_SERVER } from '../compartido/baseurl';

import { FormBuilder, FormGroup } from '@angular/forms';
import { UntypedFormBuilder,UntypedFormGroup,Validators } from '@angular/forms';
import { SessionService } from '../services/session.service';
import { HaspService } from '../services/hasp.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  language: string = "";
  loginForm !: UntypedFormGroup;
  isLogin: Boolean = false;

  erroresForm:any = {

    'username': '',

    'password': '',

  };

  mensajesError:any = {

  'nombre': {
	'required':	'El nombre es obligatorio.',

      			'minlength':     'El nombre debe tener una longitud mínima de 2 caracteres.',

      			'maxlength':     'El nombre no puede exceder de 25 caracteres.'
    },

    	'password': {

      			'required':      'La contraseña es obligatoria.',

      			'minlength':     'La contraseña debe tener una longitud mínima de 2 caracteres.',

      			'maxlength':     'La contraseña no pueden exceder de 25 caracteres.'
    },
  
  };
  dialogRef: any;


  constructor(private translateService2:TranslateService,private router: Router, private haspService:HaspService, private sessionService: SessionService, private fb: FormBuilder, private http: HttpClient, private translateService: ChangeTranslateService) {

    this.loginForm = this.fb.group({
      username: ['',[Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
    });
    this.loginForm.valueChanges.subscribe(datos => this.onChangeValue(datos));
    this.onChangeValue();
  }

  ngOnInit(): void {
    this.language = this.translateService.getLanguage();
  }

  onChangeValue(data?: any) {
      
    if(!this.loginForm) { return; }
    const form= this.loginForm;
    for(const field in this.erroresForm) {
    // Se borrarán los mensajes de error previos
    this.erroresForm[field] = '';
    const control = form.get(field);
    if(control && control.dirty&& !control.valid) {
    const messages= this.mensajesError[field];
    for(const key in control.errors) {
    this.erroresForm[field] += messages[key] + ' ';
    }
    }
    }
    }

  onSubmit(): void {

    if (this.loginForm.valid) {
  
      //Datos a enviar para la autenticación
      let data_send = {
      username: this.loginForm.value.username,
      password: this.loginForm.value.password
    };


    let url_login = baseURL_SERVER + "/clientLogin/";

    this.http.post<{ valid_credentials: string }>(url_login, data_send).subscribe(
      (response) => {

        //Convertimos el string del valor del json a booleano y lo asignamos a la variable isLogin        
        this.isLogin = !!response.valid_credentials;
        if(this.isLogin){

          swal.fire({
            title: this.translateService2.instant('COMUN.BIENVENIDO'),
            text: this.translateService2.instant('COMUN.USUARIO') + ": " + this.loginForm.value.username,
            icon: 'success',
          });

          this.sessionService.setStateLogin(true);
          this.sessionService.setUsername(this.loginForm.value.username);
          this.haspService.setClientName(this.loginForm.value.username);
          this.router.navigate(["/inicio"]);
        }
        else
        {
          swal.fire({
            title: this.translateService2.instant('COMUN.ERROR'),
            text: this.translateService2.instant('COMUN.USUARIO_INCORRECTO'),
            icon: 'error',
          });
          this.loginForm.reset();
        }
          
      } 
    );
    }
  }

}