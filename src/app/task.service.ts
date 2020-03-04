import { Injectable, Input, OnInit } from '@angular/core';
import { ITask } from './interfaces/task-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import nanoid from 'nanoid';

@Injectable({
  providedIn: 'root'
})
export class TaskService implements OnInit {

	private tasks: ITask[];

	ngOnInit(): void {
		this.tasks = JSON.parse(localStorage.getItem('tasks'));
		console.log(this.tasks);
	}

	setItem(id, date, done, form) {
		let existantTask = JSON.parse(localStorage.getItem('tasks'));
    if (existantTask) {
      this.tasks = existantTask;
    }
    id = nanoid();
    date = new Date().toLocaleString();
    done = false;
    this.tasks.push(form);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
		return (
			this.tasks
		)
	}

	getItem() {
		return this.tasks
	}
	
  private tasksSubject = new BehaviorSubject<ITask[]>(this.tasks);
	tasks$ = this.tasksSubject.asObservable();
	

	updateTasks(tasks) {
		this.tasksSubject.next(tasks);
	}

}