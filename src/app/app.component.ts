import { Component, Output } from '@angular/core';
import { ITask } from './interfaces/task-interface';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @Output() id: ITask['id'];
  title = 'ang-to-do-list';
  subscription: Subscription;

  tasks$: Observable<ITask[]> = new Observable((subscriber) => {
    let exTasks = JSON.parse(localStorage.getItem('tasks'));
    subscriber.next(exTasks);
  })

  onDeleteHandler(id: string) {
    // this.tasks$.filter((task: ITask) => {
    //   return task.id !== id;
    // })
  }
}
