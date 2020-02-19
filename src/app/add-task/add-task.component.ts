import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Task } from './task';
import nanoid from 'nanoid';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddTaskComponent implements OnInit {
  title:string = '';
  description:string = '';
  existantTasks = [];
  
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  open(content) {
    this.modalService.open(content);
  }
  addTask() {
    let tasks: Task[] = [
      {
        title: this.title,
        description: this.description,
        id: nanoid(),
        done: false,
        date: new Date().toISOString().slice(0,10),
      }
    ];
    let existant = JSON.parse(localStorage.getItem('task'));
    this.existantTasks = existant === null ? [] : existant;
    this.existantTasks.push(tasks[0]);
    localStorage.setItem('task', JSON.stringify(this.existantTasks));
  }

  ngOnInit(): void {
  }

}
