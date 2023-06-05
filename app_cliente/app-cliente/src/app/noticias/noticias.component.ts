import { Component } from '@angular/core';
import { Noticia } from '../compartido/noticia';
import { NoticiasService } from '../services/noticias.service';
import { ChangeTranslateService } from '../services/change-translate.service';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})


export class NoticiasComponent {
  errorMensaje:String = "";

  noticiasArray:Noticia[] = [];
  noticia:Noticia = new Noticia();
  language:String = "";
  constructor(private noticiasService:NoticiasService,private translateService:ChangeTranslateService) {
  }

  ngOnInit(): void {

    this.loadNews();
    this.language = this.translateService.getLanguage();
  }
  
  async loadNews(){

    try {
      const noticias = await this.noticiasService.getNoticias().toPromise();
      this.noticiasArray = noticias;
      console.log('Subscription complete:', noticias);
      this.noticia = this.noticiasArray[0];
      // Continuar con las acciones posteriores al subscribe
    } catch (error) {
      this.errorMensaje = "error";
      console.error('Error during subscription:', error);
    }
  }
}
