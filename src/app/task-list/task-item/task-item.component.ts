import { Component, Input, Output } from '@angular/core';
import { ITask } from 'src/app/interfaces/task-interface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent {
  @Input() task: ITask;
  @Output() id: ITask['id'];

  onDeleteTask(id) {
    // output
  }
  onCompleteTask(id) {
    
  }
}
