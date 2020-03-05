import { Component, Input, OnInit } from '@angular/core';
import { ITask } from './interfaces/task-interface';
import { Observable, Subscription } from 'rxjs';
import { TaskService } from './task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input() id: ITask['id'];
  title = 'ang-to-do-list';
  tasks: ITask[];
 
  constructor(private taskService: TaskService) {}

  ngOnInit() {
    this.taskService.tasks$.subscribe((data) => {
      this.tasks = data;
      console.log(data);
    })
  }
}
