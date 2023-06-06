import{ Routes } from'@angular/router';

import{ ContactoComponent} from '../contacto/contacto.component';
import { InicioComponent } from '../inicio/inicio.component';
import { DetalleLicenciaComponent } from '../detalle-licencia/detalle-licencia.component';
import { NoticiasComponent } from '../noticias/noticias.component';
import { InfoLsymComponent } from '../info-lsym/info-lsym.component';

export const rutas: Routes= [

{ path: 'contacto', component: ContactoComponent},
{ path: 'inicio', component: InicioComponent},
{ path: 'detalle-licencia', component: DetalleLicenciaComponent},
{ path: 'noticias', component: NoticiasComponent},
{ path: 'sobre-lsym', component: InfoLsymComponent},
{ path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

