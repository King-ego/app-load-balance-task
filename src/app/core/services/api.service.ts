import {Injectable} from "@angular/core";

@Injectable({providedIn: 'root'})
export class ApiService {
  getMetrics() {
    return {
      totalUsers: 10,
      totalTasks: 40,
      totalPoints: 500
    }
  }
}
