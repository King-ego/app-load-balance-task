import {Component} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MaterialModule, CommonModule]
})

export class HeaderComponent {
  constructor(public router: Router) {}

  get isLogin() { return this.router.url === '/auth/login'; }
  get isRegister() { return this.router.url === '/auth/register'; }
  get isHome() { return this.router.url === '/home'; }

  get isLoggedIn() { return false; }
}
