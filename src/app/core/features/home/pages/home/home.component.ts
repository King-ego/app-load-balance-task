import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../../../../models";
import {ApiService} from "../../../../services/api.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  user$:Observable<User[]>;

  constructor(private api: ApiService) {
    this.user$ = this.api.getUsers();
  }
}
