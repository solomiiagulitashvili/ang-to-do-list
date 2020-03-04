import { Component, Input, Output } from '@angular/core';
import { ITask } from '../interfaces/task-interface';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})

export class TaskListComponent {
  @Input() tasks: ITask[];
  @Output() id: ITask['id'];

  
}
