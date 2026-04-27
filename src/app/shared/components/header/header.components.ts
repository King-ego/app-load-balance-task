import {Component} from "@angular/core";
import {MaterialModule} from "../../material.module";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  imports: [MaterialModule, CommonModule]
})

export class HeaderComponent {}
