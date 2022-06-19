import {Component, Input, OnInit} from '@angular/core';
import {TASKS} from '../../mock-tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task = TASKS[0];

  constructor() {
  }

  ngOnInit(): void {
  }

}