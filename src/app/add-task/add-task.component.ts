import { Component, OnInit, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITask } from '../interfaces/task-interface';
import nanoid from 'nanoid';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  providers: [NgbModalConfig, NgbModal]
})
export class AddTaskComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    // id: nanoid(),
    // date: new Date().toLocaleString(),
    // done: false
  });
  tasks: ITask[] = [];
  constructor(config: NgbModalConfig, private modalService: NgbModal) {
    config.backdrop = 'static';
    config.keyboard = false;

    // this.form.patchValue({
    //   title: 'title',
    //   description: 'description',
    // })
  }

  open(content) {
    this.modalService.open(content);
  }

  onSubmit() {
    let existantTask = JSON.parse(localStorage.getItem('tasks'));
    if (existantTask) {
      this.tasks = existantTask;
    }
    this.form.value.id = nanoid();
    this.form.value.date = new Date().toLocaleString();
    this.form.value.done = false;
    this.tasks.push(this.form.value);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    console.log(this.form.value);
  }

  ngOnInit(): void {
  }

}
