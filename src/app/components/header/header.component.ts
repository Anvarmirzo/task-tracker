import {Component, OnInit} from '@angular/core';
import {UiService} from "../../services/ui.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title = 'Task Tracker';
  showAddTask: boolean = false;
  subscription?: Subscription

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggle().subscribe({
      next: (value) => this.showAddTask = value
    });
  }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
    console.log('toggleAddTask');
  }
}
