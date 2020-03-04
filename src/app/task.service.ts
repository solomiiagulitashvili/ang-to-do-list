import { Injectable, Input, OnInit } from '@angular/core';
import { ITask } from './interfaces/task-interface';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {

	private existantTasks: ITask[];

	ngOnInit(): void {
		this.existantTasks = JSON.parse(localStorage.getItem('tasks'));
		console.log(this.existantTasks);
	}
	
  private tasksSubject = new BehaviorSubject<ITask[]>(this.existantTasks);
  tasks$ = this.tasksSubject.asObservable();

	updateTasks(tasks) {
		this.tasksSubject.next(tasks);
	}

}