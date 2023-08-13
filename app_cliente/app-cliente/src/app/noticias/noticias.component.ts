import { Component, ChangeDetectorRef, Input } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { ChangeTranslateService } from '../services/change-translate.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})


export class NoticiasComponent {

  errorMensaje: string = "";
  news_list: any[] = [];
  option: string = "";
  language:String = "";
  date: string = "";
  isValid: Boolean = false;
  datosMostrados: Boolean = false;
  private opcionSubscription: Subscription;

  constructor(private cdr:ChangeDetectorRef, private noticiasService:NoticiasService,private translateService:ChangeTranslateService, ) {
    this.opcionSubscription = this.noticiasService.getOption().subscribe(option_news => {
      this.option = option_news;
      switch (this.option){
        case "all":
          this.getAllNews();
          break;
        
        case "feature":
          this.getNewsByType("feature");
          break;
        
        case "environment":
          this.getNewsByType("environment");
          break;
  
        case "general":
          this.getNewsByType("general");
          break;
      }
    });
  }

  ngOnInit(): void {

    this.language = this.translateService.getLanguage();

    if(this.option=="date")
      this.getNewsByDate()

    
  }
  
  async getAllNews(): Promise<void>{

    this.news_list = await this.noticiasService.getAllNews();

  }

  async getNewsByDate(): Promise<void>{
      this.date = this.noticiasService.getNewsDate();
      this.news_list = await this.noticiasService.getNewsByDate(this.date);
      
      if(this.news_list.length==0)
        alert("No existen noticias de la fecha seleccionada");
  }

  async getNewsByType(type: string): Promise<void>{
 
    this.news_list = await this.noticiasService.getNewsByType(type);
    this.cdr.detectChanges();
    if(this.news_list.length==0)
      alert("No existen noticias del tipo seleccionado");
}
}
