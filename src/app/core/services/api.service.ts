import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {User} from "../models/models";

@Injectable({providedIn: 'root'})
export class ApiService {
  private base = 'http://localhost:8099';
  constructor(private http: HttpClient) {}

  getMetrics() {
    return {
      totalUsers: 10,
      totalTasks: 40,
      totalPoints: 500
    }
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.base}/users`);
  }
}
