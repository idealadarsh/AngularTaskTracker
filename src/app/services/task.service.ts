import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  db: string = "DB";

  constructor() {}

  getTasks(): Observable<Task[]> {
    const res = localStorage.getItem(this.db);
    return (res !== null) ? of(JSON.parse(res)) :  of([])
  }

  setTask(tasks: Task[]): void {
    localStorage.setItem(this.db, JSON.stringify(tasks));
  }
}
