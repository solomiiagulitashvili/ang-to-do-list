import { Component, OnInit, Output } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ITask } from '../interfaces/task-interface';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TaskService } from '../task.service';


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
  });
  tasks: ITask[] = [];
  constructor(config: NgbModalConfig, private modalService: NgbModal, private taskService: TaskService) {
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
    this.taskService.setItem(this.form.value.id, this.form.value.date, this.form.value.done, this.form.value);
    this.tasks = this.taskService.getItem();
    this.taskService.updateTasks(this.tasks);
  }  

  ngOnInit(): void {
  }

}
