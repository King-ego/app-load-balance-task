import { Routes } from '@angular/router'
import { roleGuard } from './core/guards/role.guard'
import { UserRole } from './core/models/models'

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./core/features/auth/auth.routes')
        .then(m => m.AUTH_ROUTES)
  },

  {
    path: '',
    loadChildren: () =>
      import('./core/features/home/home.routes')
        .then(m => m.HOME_ROUTES)
  },
  {
    path: 'admin',
    canActivate: [roleGuard],
    data: { roles: [UserRole.SYSTEM_ADMIN] },
    loadChildren: () =>
      import('./core/features/admin/admin.routes')
        .then(m => m.ADMIN_ROUTES)
  },

  {
    path: 'company',
    canActivate: [roleGuard],
    data: { roles: [UserRole.COMPANY_ADMIN] },
    loadChildren: () =>
      import('./core/features/company/company.routes')
        .then(m => m.COMPANY_ROUTES)
  },

  {
    path: 'member',
    canActivate: [roleGuard],
    data: { roles: [UserRole.MEMBER] },
    loadChildren: () =>
      import('./core/features/member/member.routes')
        .then(m => m.MEMBER_ROUTES)
  },

  {
    path: '**',
    redirectTo: ''
  }

]
