import { Component, Output, OnInit, OnDestroy, Input } from '@angular/core';
import { ITask } from './interfaces/task-interface';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  @Input() id: ITask['id'];
  title = 'ang-to-do-list';
  subscription: Subscription;

  tasks$: Observable<ITask[]> = new Observable((subscriber) => {
    let exTasks = JSON.parse(localStorage.getItem('tasks'));
    subscriber.next(exTasks);
  })

  ngOnInit() {
    this.subscription = this.tasks$.subscribe((data) => {
      console.log(data);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onDeleteHandler(id: string) {
   
  }
}
