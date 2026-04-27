import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'

@Component({
  standalone: true,
  imports: [MatCardModule],
  template: './admin.dashboard.component.html',
  styleUrl: './admin.dashboard.component.scss'
})
export class AdminDashboardComponent {}
