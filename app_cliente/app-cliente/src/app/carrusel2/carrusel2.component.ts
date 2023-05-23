import { Component } from '@angular/core';

@Component({
  selector: 'app-carrusel2',
  templateUrl: './carrusel2.component.html',
  styleUrls: ['./carrusel2.component.css']
})



export class Carrusel2Component {

  
 
  imageObject = [
    {
      thumbImage: 'assets/img/slider/portuario.jpeg',
      title: 'Portuario'
    },

    {
      thumbImage: 'assets/img/slider/mina.jpeg',
      title: 'Minería'
    },

    {
      thumbImage: 'assets/img/slider/industria.jpeg',
      title: 'Industrial y Agrícola'
    },
    {
      thumbImage: 'assets/img/slider/hardware.jpeg',
      title: 'Hardware'
    }
    ];

    imageClickHandler(event:number){
     

      if (event == 0)
      {
        window.open("https://lsymserver.uv.es/LSyMWeb/es/sistemas/portuario", "_blank");
        
      }
      else if(event==1)
      {
        window.open("https://lsymserver.uv.es/LSyMWeb/es/sistemas/mineria-y-construccion", "_blank");
      }
      else if(event==2)
      {
        window.open("https://lsymserver.uv.es/LSyMWeb/es/sistemas/industrial","_blank");
      }
      else 
      {
        window.open("https://lsymserver.uv.es/LSyMWeb/es/hardware/components","_blank");
      }
      }
    }

