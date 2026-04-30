import { inject } from '@angular/core'
import { CanActivateFn, Router } from '@angular/router'
import { AuthService } from '../services/auth.service'
import {catchError, map, Observable, of} from 'rxjs'
import {User} from "../models";

export const roleGuard: CanActivateFn = (route) => {
  const auth = inject(AuthService)
  const router = inject(Router)

  const roles: string[] = route.data['roles'] ?? []
  const hasAccess = (role?: string) => !!role && roles.includes(role)

  if (hasAccess(auth.user?.role)) {
    return true
  }

  const user$: Observable<User | null> = auth.user$

  return user$.pipe(
    map((meUser: User | null) => {
      if (meUser && hasAccess(meUser.role)) {
        return true
      }
      return router.createUrlTree(['/auth/login'])
    }),
    catchError(() => of(router.createUrlTree(['/auth/login'])))
  )
}
