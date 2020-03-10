import { Component, Input, Output, OnInit } from '@angular/core';
import { ITask } from 'src/app/interfaces/task-interface';
import { TaskService } from 'src/app/task.service';
import { Observable, Subscription } from 'rxjs';
import { ActivatedRoute, Router, Params, UrlSegment } from '@angular/router';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  @Input() task: ITask;
  tasks: ITask[];
  paramsSubscription: Subscription;
  id: string;
  public url: string;
  
<<<<<<< HEAD
  constructor(private taskService: TaskService, public route: ActivatedRoute, public router: Router) {
    // this.task = {
    //   title: '',
    //   description: '',
    //   id: '',
    //   done: false,
    //   date: '',
    // }
=======
  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) {
    this.task = {
      title: '',
      description: '',
      id: '',
      done: false,
      date: '',
    }
>>>>>>> master
  }

  onDeleteTask(id) {
    this.taskService.deleteTask(id);
  }
  onCompleteTask(id) {
    this.taskService.completeTask(id);
  }
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.paramsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id']
          this.task = this.taskService.getTask(this.id)
        }
      )
      this.url = this.router.url;
    } 
  }
  onSaveChanges(id) {
    this.taskService.onSaveChanges(id)
  }
}
