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
    form.id = nanoid();
    form.date = new Date().toLocaleString();
    form.done = false;
		this.tasks.push(form);
		console.log(form)
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
		if (!completed.done) {
			completed.done = true;
		} else {
			completed.done = false;
		}
		localStorage.setItem('tasks', JSON.stringify(this.tasks))
		this.updateTasks(this.tasks)
	}
	getTask(id) {
		let task = this.tasks.find((task) => {
			return task.id == id
		})
		return task;
	}
	onSaveChanges(id) {
		// let changed = this.tasks.find((task) => {
		// 	return task.id == id
		// })
		// let title = document.querySelector('.task-title');
		// let description = document.querySelector('.task-description');
		// console.log(changed)
		// changed.title = title.innerHTML;
		// changed.description = description.innerHTML;
		// let saved = document.querySelector('.save-changes-btn');
		// saved.innerHTML = 'Saved!';
		// localStorage.setItem('tasks', JSON.stringify(this.tasks))
		// this.updateTasks(this.tasks)
	}

}