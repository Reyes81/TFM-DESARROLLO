import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private checkboxValue = new BehaviorSubject<boolean>(false);
  private languageValue = new BehaviorSubject<String>("es");

  // Método para actualizar el valor del checkbox
  updateCheckboxValue(value: boolean): void {
    this.checkboxValue.next(value);
  }

  // Método para obtener el valor actual del checkbox
  getCheckboxValue(): Observable<boolean> {
    return this.checkboxValue.asObservable();
  }

  // Método para actualizar el valor del lang
  updateLanguageValue(value: String): void {
    this.languageValue.next(value);
  }

  // Método para obtener el valor actual del lang
  getLanguageValue(): Observable<String> {
    return this.languageValue.asObservable();
  }
}