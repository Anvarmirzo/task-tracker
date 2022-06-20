import {Injectable} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showAddTask = false;
  private subject = new Subject<boolean>();

  constructor() {
  }

  toggleAddTask() {
    this.showAddTask = !this.showAddTask;
    this.subject.next(this.showAddTask);
  }

  onToggle() {
    return this.subject.asObservable()
  }
}
