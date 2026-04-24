import { Routes } from '@angular/router'

export const COMPANY_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/company.dashboard.component')
        .then(m => m.CompanyDashboardComponent)
  }
]
