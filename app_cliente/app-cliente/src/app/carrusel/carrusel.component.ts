
import { Component, Inject, Injectable } from '@angular/core';
import{ Router} from '@angular/router'
import { EntidadService} from '../services/entidad.service'
import { Entidad } from '../compartido/entidad';
import { Feature } from '../compartido/feature';
import { ImageObject } from '../compartido/imageObject';
import { HaspService } from '../services/hasp.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})


export class CarruselComponent {

  license: any;
  features: string[] = [];

  constructor(@Inject('baseURL') public BaseURL:string, private router:Router,private haspService:HaspService){
    
    
  }

  ngOnInit():void{
    this.license = this.haspService.getLicense();
    this.initCarrousel();
    
  }
   

  @Injectable({
    providedIn: 'root'
  })

  imageObject:any=[];

  getFeaturesLicense(): string[]{
    return this.license.features;

  }

  initCarrousel():void{

    this.features = this.getFeaturesLicense();
    for(let j=0; j<this.features.length;j++){
      var object = {
        thumbImage: "assets/img/slider/" + this.features[j] + ".jpg",
        title: this.features[j]
      };
      this.imageObject.push(object);
    }
   
  }
/*
 async loadEntities(){

    try {
      const entidades = await this.entidadesService.getEntidades().toPromise();
      this.entidadesArray = entidades;
      console.log('Subscription complete:', entidades);
      // Continuar con las acciones posteriores al subscribe
      //this.initCarrousel();
    } catch (error) {
      this.errorMensaje = "error";
      console.error('Error during subscription:', error);
    }
  }

 
  */
  imageClickHandler(event:number){
  
    this.haspService.setFeature(this.imageObject[event].title)
    this.router.navigate(["/detalle-licencia"]);
  
    /*
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
    
    */

  } 
  
  }





