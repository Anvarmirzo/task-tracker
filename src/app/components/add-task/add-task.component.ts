import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Task} from "../../Task";
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask = new EventEmitter<Task>()
  text = '';
  day = '';
  reminder = false;
  showAddTask = false;
  subscription?: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe({
      next: (value) => this.showAddTask = value
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (!this.text) return alert('Please enter a task');

    const newTask: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
