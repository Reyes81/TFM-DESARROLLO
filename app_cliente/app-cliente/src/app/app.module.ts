import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import{ FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import{ MatToolbarModule} from'@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';


import { MatMenuModule} from '@angular/material/menu';
import { NgImageSliderModule } from 'ng-image-slider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';

import{ FlexLayoutModule} from'@angular/flex-layout';

import { MatFormFieldModule } from '@angular/material/form-field';

import { ContactoComponent } from './contacto/contacto.component';


import { CarouselModule } from "@syncfusion/ej2-angular-navigations";

import 'hammerjs';
import { InicioComponent } from './inicio/inicio.component';

import {GoogleMapsModule} from '@angular/google-maps';
import { CarruselComponent } from './carrusel/carrusel.component';
import { FooterComponent } from './footer/footer.component';
import { EntidadesComponent } from './entidades/entidades.component';
import { DetalleLicenciaComponent } from './detalle-licencia/detalle-licencia.component';

import {HttpClientModule, HttpClient} from '@angular/common/http';
import { ProcesaHTTPMsjService } from './services/procesa-httpmsj.service';
import { baseURL } from './compartido/baseurl';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Carrusel2Component } from './carrusel2/carrusel2.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { InfoLsymComponent } from './info-lsym/info-lsym.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { NoticiasFechaComponent } from './noticias-fecha/noticias-fecha.component';
import { LoginComponent } from './login/login.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContactoComponent,
    InicioComponent,
    CarruselComponent,
    FooterComponent,
    EntidadesComponent,
    DetalleLicenciaComponent,
    Carrusel2Component,
    NoticiasComponent,
    InfoLsymComponent,
    LicenciasComponent,
    NoticiasFechaComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatMenuModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    GoogleMapsModule,
    NgImageSliderModule,
    CarouselModule,
    MatCheckboxModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],

  providers: [{provide:'baseURL', useValue:baseURL}, ProcesaHTTPMsjService],
  bootstrap: [AppComponent]
})




export class AppModule { }
