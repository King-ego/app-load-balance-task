import { Component } from '@angular/core';
import {MaterialModule} from "../../../../../shared/material.module";

@Component({
  selector: 'app-pages',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

}
