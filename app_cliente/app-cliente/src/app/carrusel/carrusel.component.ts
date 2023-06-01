
import { Component, Inject, Injectable } from '@angular/core';
import{ Router} from '@angular/router'
import { EntidadService} from '../services/entidad.service'
import { Entidad } from '../compartido/entidad';
import { MiServicioService } from '../services/mi-servicio.service';
import { Hasp } from '../compartido/hasp';
import { Feature } from '../compartido/feature';
import { ImageObject } from '../compartido/imageObject';
import { HaspService } from '../hasp.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})


export class CarruselComponent {

  features:Feature[] = [];
  entidadesActive:Entidad[] = [];
  entidadesArray:Entidad[] = [];
  hasp:Hasp = new Hasp();
  entidadesSel: Entidad[] = [];
  entidad:Entidad = new Entidad();
  errorMensaje: string= "";

  constructor(@Inject('baseURL') public BaseURL:string, private router:Router, private entidadesService:EntidadService,private haspService:HaspService){
    
    
  }

  ngOnInit():void{
    this.loadEntities();
  }
   

  @Injectable({
    providedIn: 'root'
  })

  imageObject:any=[];
  /*
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
*/

 async loadEntities(){

    try {
      const entidades = await this.entidadesService.getEntidades().toPromise();
      this.entidadesArray = entidades;
      console.log('Subscription complete:', entidades);
      // Continuar con las acciones posteriores al subscribe
      this.initCarrousel();
    } catch (error) {
      this.errorMensaje = "error";
      console.error('Error during subscription:', error);
    }
  }

  initCarrousel():void{

    this.features = this.haspService.getFeatures();

    for(let i=0; i<this.entidadesArray.length;i++){
      for(let j=0;j<this.features.length;j++){
        if(this.entidadesArray[i].feature == this.features[j].name){
          this.entidadesActive.push(this.entidadesArray[i]);
        }
      }
    }

    for(let j=0; j<this.entidadesActive.length;j++){
      var object = {
        thumbImage: this.entidadesActive[j].image,
        title: this.entidadesActive[j].name
      };
      this.imageObject.push(object);
    }
    
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
      this.entidadesService.setEntidad(this.entidad);
    }
    this.router.navigate(["/detalle-licencia"]);
  

  }
  }





