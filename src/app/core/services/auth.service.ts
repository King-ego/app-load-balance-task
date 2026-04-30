import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import {BehaviorSubject, Observable, switchMap, tap} from 'rxjs'
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
  private base = 'http://localhost:8099';
  private userSubject = new BehaviorSubject<User | null>(null)
  user$ = this.userSubject.asObservable()

  constructor(private http: HttpClient) {}

  login(payload: LoginRequest): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(`${this.base}/auth/login`, payload, { withCredentials: true })
      .pipe(
        tap((res) => {
          this.userSubject.next(res.user)
        })
      )
  }

  logout(): Observable<void> {
    return this.http
      .post<void>(`${this.base}/auth/logout`, {}, { withCredentials: true })
      .pipe(
        tap(() => {
          this.userSubject.next(null)
        })
      )
  }

/*  me(): Observable<User> {
    return this.http.get<User>(`${this.base}/auth/me`, { withCredentials: true }).pipe(
      tap((user) => {
        this.userSubject.next(user)
      })
    )
  }*/

  private saveToStorage(user: User | null) {
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
    } else {
      localStorage.removeItem('currentUser');
    }
  }

  get user(): User | null {
    return this.userSubject.value
  }

  setUser(user: User | null) {
    this.userSubject.next(user);
    this.saveToStorage(user);
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
