import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import { catchError, map, of } from 'rxjs'

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService)
  const router = inject(Router)

  const roles: string[] = route.data['roles'] ?? []
  const user = auth.userValue()

  const hasAccess = (role?: string) => !!role && roles.includes(role)

  if (hasAccess(user?.role)) {
    return true
  }

  return auth.me().pipe(
    map((meUser) => {
      if (hasAccess(meUser.role)) {
        return true
      }
      return router.createUrlTree(['/auth/login'])
    }),
    catchError(() => of(router.createUrlTree(['/auth/login'])))
  )
}
