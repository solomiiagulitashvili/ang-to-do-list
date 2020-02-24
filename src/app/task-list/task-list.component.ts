import { Component, OnInit } from '@angular/core';
import { Task } from '../add-task/task';
import { Observable } from 'rxjs';
// import { TaskItemComponent } from './task-item/task-item.component';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})



export class TaskListComponent implements OnInit {
  // @Output() tasks;
  // tasks$: Task[] = [];
  // task: Task = {
  //   title: '',
  //   description: '',
  //   id: '',
  //   done: false,
  //   date: '',
  // };
  constructor() { }
  // subscription: any;
  
  ngOnInit(): void {
    // const getTasks = Observable.create(observer => {
    //   localStorage ? this.tasks = JSON.parse(localStorage.getItem('task')): null;
    //   console.log(this.tasks);
    //   observer.next(this.tasks);
    // })

    // this.subscription = getTasks.subscribe(taskList => this.tasks = taskList);
    //   console.log(this.tasks);
  }
  
  
  // ngOnDestroy(): void {
  //   this.subscription
  //     .unsubscribe();
  // }

}
