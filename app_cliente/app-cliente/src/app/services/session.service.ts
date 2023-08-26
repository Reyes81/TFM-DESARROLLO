import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private _isLogin = new BehaviorSubject<Boolean>(false);
  isLogin$: Observable<Boolean> = this._isLogin.asObservable();

  private _username = new BehaviorSubject<string>('');
  username$: Observable<string> = this._username.asObservable();
 
  constructor() { }

  setStateLogin(state: Boolean):void{
    this._isLogin.next(state);
  }

  getStateLogin():Observable<Boolean>{
    return this._isLogin;
  }

  setUsername(username: string): void {
    this._username.next(username);
  }

  getUsername(): Observable<string>{
    return this._username;
  }

  
}
