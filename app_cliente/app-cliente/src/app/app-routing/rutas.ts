import{ Routes } from'@angular/router';

import{ ContactoComponent} from '../contacto/contacto.component';
import { InicioComponent } from '../inicio/inicio.component';
import { DetalleLicenciaComponent } from '../detalle-licencia/detalle-licencia.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { InfoLsymComponent } from '../info-lsym/info-lsym.component';
import { CarruselComponent } from '../carrusel/carrusel.component';
import { Carrusel2Component } from '../carrusel2/carrusel2.component';

export const rutas: Routes= [

{ path: 'contacto', component: ContactoComponent},
{ path: 'inicio', component: InicioComponent},
{ path: 'detalle-licencia', component: DetalleLicenciaComponent},
{ path: 'noticias', component: NoticiasComponent},
{ path: 'sobre-lsym', component: InfoLsymComponent},
{ path: 'carrusel', component: CarruselComponent},
{ path: 'carrusel2', component: Carrusel2Component},
{ path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

