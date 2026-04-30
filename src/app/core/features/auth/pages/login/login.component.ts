import {AfterViewInit, Component} from '@angular/core';
import {MaterialModule} from "../../../../../shared/material.module";
import {environment} from "../../../../../../../environment";
import {HeaderComponent} from "../../../../../shared/components/header/header.components";
import {FormBuilder, Validators, ReactiveFormsModule} from "@angular/forms";
import {ApiService} from "../../../../services/api.service";
import {Router} from "@angular/router";
import {User} from "../../../../models";
import {AuthService} from "../../../../services/auth.service";

declare const google: any;

@Component({
  standalone: true,
  imports: [MaterialModule, HeaderComponent, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements AfterViewInit {
  constructor(
    private fb: FormBuilder,
    private apiLogin: ApiService,
    private router: Router,
    private auth: AuthService) {
  }

  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(2)]]
   });

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const { email, password } = this.form.value as { email: string; password: string };

    this.apiLogin.setLogin(email, password).subscribe({
      next: (user: User) => {
        this.auth.setUser(user);
        this.router.navigate(['/member']);
      },
      error: (error) => {
        console.error('Login failed:', error);
      }
    });
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
