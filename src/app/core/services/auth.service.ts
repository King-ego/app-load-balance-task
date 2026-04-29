import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject, Observable, tap } from 'rxjs'
import { User, UserRole } from '../models'

type LoginRequest = {
  email: string
  password: string
}

type LoginResponse = {
  user: User
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null)
  user$ = this.userSubject.asObservable()

  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>('/auth/login', payload, { withCredentials: true })
      .pipe(
        tap((res) => {
          this.userSubject.next(res.user)
        })
      )
  }

  logout(): Observable<void> {
    return this.http
      .post<void>('/auth/logout', {}, { withCredentials: true })
      .pipe(
        tap(() => {
          this.userSubject.next(null)
        })
      )
  }

  me(): Observable<User> {
    return this.http.get<User>('/auth/me', { withCredentials: true }).pipe(
      tap((user) => {
        this.userSubject.next(user)
      })
    )
  }

  get user() {
    return this.userSubject.value
  }

  hasRole(roles: UserRole[]) {
    return !!this.user && roles.includes(this.user.role)
  }

  userValue(): User | null {
    return this.userSubject.value
  }

  isAuthenticated(): boolean {
    return !!this.userSubject.value
  }
}
