import {AfterViewInit, Component} from '@angular/core';
import {MaterialModule} from "../../../../../shared/material.module";
import {environment} from "../../../../../../../environment";

declare const google: any;

@Component({
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {
  ngAfterViewInit(): void {

    google.accounts.id.initialize({
      client_id: environment.googleClientId,
      callback: (resp: any) => {
        this.loginGoogle(resp.credential);
      }
    });

    google.accounts.id.renderButton(
      document.getElementById("googleBtn"),
      {
        theme: "outline",
        size: "large",
        width: 280
      }
    );
  }

  loginGoogle(token: string) {
    console.log("Google token:", token);
  }

}
