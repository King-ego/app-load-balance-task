import {inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";
import {BehaviorSubject, Observable} from "rxjs";
import {User} from "../models/models";

@Injectable({providedIn: 'root'})
export class AuthService {
  platform = inject(PLATFORM_ID);
  private userSubject = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  get token(): string | null{
    if(isPlatformBrowser(this.platform)){
      return localStorage.getItem('token')
    }
    return null;
  }

  userValue(): User | null {
    return this.userSubject.value;
  }

  updateToken(token: string | null): void{
    if(isPlatformBrowser(this.platform)) return;

    if(!token){
      localStorage.removeItem('token');
      return;
    }

    localStorage.setItem('token', token);
  }

  login(user: User, token: string): void {
    this.updateToken(token);
    this.userSubject.next(user);
  }

  logout(): void {
    this.updateToken(null);
    this.userSubject.next(null);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }
}
