import {Component, OnInit} from '@angular/core';
import {TASKS} from '../../mock-tasks';
import {Task} from '../../Task';
import {TaskService} from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {
  }

  ngOnInit() {
    this.taskService.getTasks().subscribe({
      next: (tasks) => this.tasks = tasks,
      error: (err) => console.log(err)
    });
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe({
      next: (task) => this.tasks.push(task),
    });
  }

  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe({
      next: () => this.tasks = this.tasks.filter(t => t.id !== task.id),
      error: (err) => console.log(err)
    });
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe()
  }
}
