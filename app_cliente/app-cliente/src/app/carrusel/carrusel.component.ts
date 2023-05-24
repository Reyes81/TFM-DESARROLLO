
import { Component, Inject, Injectable } from '@angular/core';
import{ Router} from '@angular/router'
import { EntidadService} from '../services/entidad.service'
import { Entidad } from '../compartido/entidad';
import { MiServicioService } from '../services/mi-servicio.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})


export class CarruselComponent {


  @Injectable({
    providedIn: 'root'
  })


  imageObject = [
    {
      thumbImage: 'assets/img/slider/ech_tfm.jpg',
      title: 'Simulador de ECH'
    },

    {
      thumbImage: 'assets/img/slider/heavy_forklift_tfm.jpg',
      title: 'Simulador de Heavy Forklift'
    },

    {
      thumbImage: 'assets/img/slider/mhc_tfm.jpg',
      title: 'Simulador de MHC'
    },
    {
      thumbImage: 'assets/img/slider/reach_tfm.jpg',
      title: 'Simulador de Reach-Stacker'
    },
    {
      thumbImage: 'assets/img/slider/rmg_tfm.jpg',
      title: 'Simulador de RMG'
    },
    {
      thumbImage: 'assets/img/slider/roro_tfm.jpg',
      title: 'Simulador de RoRo'
    },
    {
      thumbImage: 'assets/img/slider/rtg_tfm.jpg',
      title: 'Simulador de RTG'
    },
    {
      thumbImage: 'assets/img/slider/sts_tfm.jpg',
      title: 'Simulador de STS'
    }
    ];

    entidadesArray: Entidad[] = [];
    entidad:Entidad = new Entidad();
    errorMensaje: string= "";

  constructor(@Inject('baseURL') public BaseURL:string, private router:Router, private entidadService:EntidadService, private miServicio:EntidadService){}

  ngOnInit(){
    this.entidadService.getEntidades().subscribe(entidades => this.entidadesArray= entidades,  errorMensaje=> this.errorMensaje= <any>errorMensaje);
    
  }

  imageClickHandler(event:number){
    for(let i=0; i<this.entidadesArray.length; i++){
      if(this.entidadesArray[i].name == this.imageObject[event].title)
        {
         
            this.entidad = this.entidadesArray[i];
        }
    }

    if(this.entidad!=null)
    {
      this.miServicio.setEntidad(this.entidad);
    }
    this.router.navigate(["/detalle-licencia"]);

  }

  }





