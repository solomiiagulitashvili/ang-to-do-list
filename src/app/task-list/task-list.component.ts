import { Component, OnInit, OnDestroy } from '@angular/core';
import { Task } from '../add-task/task';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})



export class TaskListComponent implements OnInit, OnDestroy {
  tasks: Task[] = [];
  task: Task = {
    title: '',
    description: '',
    id: '',
    done: false,
    date: '',
  };
  constructor() { }
  subscription: any;
  
  ngOnInit(): void {
    const getTasks = Observable.create(observer => {
      localStorage ? this.tasks = JSON.parse(localStorage.getItem('task')): null;
      console.log(this.tasks);
      observer.next(this.tasks);
    })

    this.subscription = getTasks.subscribe(taskList => this.tasks = taskList);
      console.log(this.tasks);
  }
  onDeleteTask(id) {
    let taskList = JSON.parse(localStorage.getItem('task'));
    let taskToDelete = taskList.findIndex((task) => {
      return task.id === id
    });
    taskList.splice(taskToDelete, 1)
    localStorage.setItem('task', JSON.stringify(taskList))
  }
  onCompleteTask(id) {
    this.tasks.map((task) => {
      if (task.id === id) {
        task.done = !task.done
      }
    })
    localStorage.setItem('task', JSON.stringify(this.tasks))

  }
  changeColor(done) {
    if (done) {
      return 'green !important'
    } else {
      return 
    }
  }
  
  ngOnDestroy(): void {
    this.subscription
      .unsubscribe();
  }

}
