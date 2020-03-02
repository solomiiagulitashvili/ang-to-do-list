// import { Injectable, OnInit, Input } from '@angular/core';
// import { ITask } from './interfaces/task-interface';
// import { Subject, Observable } from 'rxjs';

// @Injectable({
//   providedIn: 'root'
// })
// export class TaskService implements OnInit {
//   tasks: ITask[];
//   private tasksSubject = new Subject<ITask[]>();
//   watchTasks(): Observable<ITask[]> {
//     return this.tasksSubject.asObservable();
//   }

//   constructor() {
//     this.watchTasks().next(this.tasks);
//   }
  


//   ngOnInit() {
   
//   }

// }