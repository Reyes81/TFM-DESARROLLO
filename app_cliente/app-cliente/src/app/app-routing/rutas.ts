import{ Routes } from'@angular/router';

import{ ContactoComponent} from '../contacto/contacto.component';
import { InicioComponent } from '../inicio/inicio.component';
import { DetalleLicenciaComponent } from '../detalle-licencia/detalle-licencia.component';


export const rutas: Routes= [

{ path: 'contacto', component: ContactoComponent},
{ path: 'inicio', component: InicioComponent},
{ path: 'detalle-licencia', component: DetalleLicenciaComponent},
{ path: '', redirectTo: '/inicio', pathMatch: 'full' },

];

