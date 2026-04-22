import {inject, Injectable, PLATFORM_ID} from "@angular/core";
import {isPlatformBrowser} from "@angular/common";

@Injectable({providedIn: 'root'})
export class AuthService {
  platform = inject(PLATFORM_ID);

  get token(){
    if(isPlatformBrowser(this.platform)){
      return localStorage.getItem('token')
    }
    return null;
  }
}
