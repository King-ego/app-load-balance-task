import { Component, AfterViewInit } from '@angular/core';
import {MaterialModule} from "../../../../../shared/material.module";
import {environment} from "../../../../../../../environment";

declare const google: any;

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements AfterViewInit{
  ngAfterViewInit(): void {
    const clientId = environment.googleClientId
    google.accounts.id.initialize({
      client_id: clientId,
      callback: (resp: any) => {
        console.log(resp.credential)

        // enviar pro backend
        this.loginGoogle(resp.credential)
      }
    });

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      {
        theme: "outline",
        size: "large",
        width: 300
      }
    );
  }

  loginGoogle(token: string) {
    console.log("JWT Google:", token)
  }
}
