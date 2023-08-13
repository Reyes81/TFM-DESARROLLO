import { Component } from '@angular/core';
import { NoticiasService } from '../services/noticias.service';
import { ChangeTranslateService } from '../services/change-translate.service';
import { Router } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-noticias-fecha',
  templateUrl: './noticias-fecha.component.html',
  styleUrls: ['./noticias-fecha.component.css']
})
export class NoticiasFechaComponent {

  date: Date;
  date_news: string = "";

  constructor(private noticiasService:NoticiasService, private translateService:ChangeTranslateService, private router: Router) {
    this.date = new Date('2023-08-09');
  }

  setNewsDate():void{
    let year = this.date.getFullYear();
    let month = this.date.getMonth() + 1;
    let day = this.date.getDate();

    alert(this.date);
    alert(month);
    alert(day);

    let monthString = "0" + month.toString();
    let dayString = "0" + day.toString();

    if(month<10 && day<10)  
      this.date_news = year.toString()+ "-" + monthString + "-" + dayString;
    else if(month<10 && day>9)
      this.date_news = year.toString()+ "-" + monthString + "-" + day.toString();
    else if(month>9 && day<10)
      this.date_news = year.toString()+ "-" + month.toString() + "-" + dayString;
    else
      this.date_news = year.toString()+ "-" + month.toString() + "-" + day.toString();
    
    alert(this.date_news);
    this.noticiasService.setNewsDate(this.date_news);
    this.router.navigate(["/noticias"]);
    }
}

