import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = `${window.location.protocol}//${window.location.hostname}:13000/tasks`;

  constructor(private http: HttpClient) {
  }

  getTasks() {
    return this.http.get<Task[]>(this.apiUrl)
  }

  addTask(task: Task) {
    return this.http.post<Task>(this.apiUrl, task, httpOptions)
  }

  deleteTask(task: Task) {
    return this.http.delete<Task>(`${this.apiUrl}/${task.id}`)
  }

  updateTaskReminder(task: Task) {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task, httpOptions)
  }
}
