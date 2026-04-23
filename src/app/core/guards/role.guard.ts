import { inject } from '@angular/core'
import {CanActivateFn, Router} from '@angular/router'
import { AuthService } from '../services/auth.service'

export const roleGuard: CanActivateFn = (route) => {

  const auth = inject(AuthService)
  const router = inject(Router)

  const roles: string[] = route.data['roles'] ?? []
  const userRole = auth.userValue()?.role

  if (userRole && roles.includes(userRole)) {
    return true
  }

  return router.createUrlTree(['/login'])
}
