import { Injectable } from '@angular/core'
import {of, delay, Observable} from 'rxjs'
import {HttpClient} from "@angular/common/http";
import {User} from "../models";

@Injectable({ providedIn: 'root' })
export class ApiService {
  private base = 'http://localhost:8099';
  constructor(private http: HttpClient) {}

  getSystemMetrics() {
    return of({
      totalCompanies: 12,
      totalUsers: 45,
      totalTasksCompleted: 320,
      totalPointsDistributed: 5000
    }).pipe(delay(500))
  }

  getCompanies() {
    return of([
      { id: '1', name: 'Casa Silva', memberCount: 4 },
      { id: '2', name: 'Casa Souza', memberCount: 3 }
    ])
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.base}/users`);
  }

  setLogin(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.base}/auth/login`, { email, password }, { withCredentials: true });
  }

  me(): Observable<any> {
    return this.http.get(`${this.base}/auth/me`, { withCredentials: true })
  }

  setLogout() {
    return this.http.post(`${this.base}/auth/logout`, {}, { withCredentials: true });
  }

}
