import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private checkboxValue = new BehaviorSubject<boolean>(false);

  // Método para actualizar el valor del checkbox
  updateCheckboxValue(value: boolean): void {
    this.checkboxValue.next(value);
  }

  // Método para obtener el valor actual del checkbox
  getCheckboxValue(): Observable<boolean> {
    return this.checkboxValue.asObservable();
  }
}