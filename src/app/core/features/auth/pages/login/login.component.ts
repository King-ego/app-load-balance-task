import {AfterViewInit, Component} from '@angular/core';
import {MaterialModule} from "../../../../../shared/material.module";
import {environment} from "../../../../../../../environment";
import {HeaderComponent} from "../../../../../shared/components/header/header.components";
import {FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";

declare const google: any;

@Component({
  standalone: true,
  imports: [MaterialModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {
  constructor(private fb: FormBuilder) {
  }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]]
   });

  submit() {
    console.log(this.form.value)
  }

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
