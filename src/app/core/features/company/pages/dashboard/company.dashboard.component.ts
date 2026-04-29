import { Component } from '@angular/core'
import { MatCardModule } from '@angular/material/card'

@Component({
  standalone: true,
  imports: [MatCardModule],
  template: `

<mat-card>
Company Dashboard
</mat-card>

`
})
export class CompanyDashboardComponent {}
