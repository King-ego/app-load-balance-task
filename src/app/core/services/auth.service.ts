import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { User, UserRole } from '../models'

@Injectable({ providedIn: 'root' })
export class AuthService {

  private userSubject = new BehaviorSubject<User | null>(null)

  user$ = this.userSubject.asObservable()

  login(role: UserRole) {
    const mock: User = {
      id: '1',
      username: 'diego',
      email: 'diego@email.com',
      role,
      companyId: '1',
      points: 120
    }

    localStorage.setItem('token', 'mock-jwt')
    this.userSubject.next(mock)
  }

  get user() {
    return this.userSubject.value
  }

  logout() {
    localStorage.removeItem('token')
    this.userSubject.next(null)
  }

  hasRole(roles: UserRole[]) {
    return roles.includes(this.user?.role!)
  }

  userValue(): User | null {
    return this.userSubject.value;
  }
}
