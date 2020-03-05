import { Injectable, Input, OnInit } from '@angular/core';
import { ITask } from './interfaces/task-interface';
import { BehaviorSubject, Observable } from 'rxjs';
import nanoid from 'nanoid';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
	private tasks: ITask[];
	constructor() {
		this.tasks$.subscribe((data) => {
			this.tasks = data
		})
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
	
  private tasksSubject = new BehaviorSubject<ITask[]>(JSON.parse(localStorage.getItem('tasks')));
	tasks$ = this.tasksSubject.asObservable();
	
	updateTasks(tasks) {
		this.tasksSubject.next(tasks);
	}

	deleteTask(id) {
		this.tasks = this.tasks.filter((task) => {
			return task.id !== id
		})
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
		this.updateTasks(this.tasks)
	}
	completeTask(id) {
		let completed = this.tasks.find((task) => {
			return task.id == id
		})
		completed.done = true;
		localStorage.setItem('tasks', JSON.stringify(this.tasks))
		this.updateTasks(this.tasks)
	}

}