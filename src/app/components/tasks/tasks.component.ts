import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t.id !== task.id);
    this.updateTasks();
  }

  toggleReminder(task: Task) {
    this.tasks = this.tasks.map(t => t.id === task.id ? {...t, reminder: !t.reminder} : t);
    this.updateTasks();
  }

  addTask(task: Task) {
    this.tasks = [...this.tasks, task]
    this.updateTasks();
  }

  updateTasks() {
    this.taskService.setTask(this.tasks);
  }

}
