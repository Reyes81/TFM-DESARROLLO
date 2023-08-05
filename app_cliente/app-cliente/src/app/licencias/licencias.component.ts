import { Component } from '@angular/core';
import { HaspService } from '../services/hasp.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrls: ['./licencias.component.css']
})
export class LicenciasComponent {
   
  licenses:any[] = [];
  errorMessage:string = "";
  licensesNumbers: string[] = []; 
  constructor(private haspService:HaspService, private router: Router) {
   
     }
   
     ngOnInit(): void {

      this.loadLicenses();
     
     }

     async loadLicenses(){

      try {
        this.licenses = await this.haspService.getClientLicenses();
        console.log('Subscription complete:', this.licenses);
        // Continuar con las acciones posteriores al subscribe
        this.haspService.getLicensesNumbers();
      } catch (error) {
        this.errorMessage = "error";
        console.error('Error during subscription:', error);
      }

    }

    onClickLicenseNumber(license:any, event: Event): void{
      event.preventDefault(); // Evita el comportamiento predeterminado del enlace
      this.haspService.setLicense(license);
      this.router.navigate(["/carrusel"]);

    }

    

}
