import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-entidades',
  templateUrl: './entidades.component.html',
  styleUrls: ['./entidades.component.css']
})
export class EntidadesComponent {
  constructor (@Inject('baseURL') public BaseURL:string){}

}
