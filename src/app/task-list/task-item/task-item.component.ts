import { Component, Input, Output } from '@angular/core';
import { ITask } from 'src/app/interfaces/task-interface';
import { TaskService } from 'src/app/task.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: ITask;
  tasks: Observable<ITask[]>;
  
  constructor(private taskService: TaskService) {}

  onDeleteTask(id) {
    this.taskService.deleteTask(id);
  }
  onCompleteTask(id) {
    this.taskService.completeTask(id);
  }
}
