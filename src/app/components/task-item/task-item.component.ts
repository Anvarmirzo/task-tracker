import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {TASKS} from '../../mock-tasks';
import {faTimes} from '@fortawesome/free-solid-svg-icons';
import {Task} from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task = TASKS[0];
  @Output() onDeleteTask = new EventEmitter<Task>()
  @Output() onToggleReminder = new EventEmitter<Task>()
  faTimes = faTimes;

  constructor() {
  }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
    this.onDeleteTask.emit(task);
  }

  onToggle(task: Task) {
    this.onToggleReminder.emit(task);
  }
}
