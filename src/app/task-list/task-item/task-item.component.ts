import { Component, OnInit, Input } from '@angular/core';
// import { Task } from '../../add-task/task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {
  // @Input() task: Task; 
  // constructor() { }

  ngOnInit(): void {
    
  }

  // // onDeleteTask(id) {
  // //   let taskList = JSON.parse(localStorage.getItem('task'));
  // //   let taskToDelete = taskList.findIndex((task) => {
  // //     return task.id === id
  // //   });
  // //   taskList.splice(taskToDelete, 1)
  // //   localStorage.setItem('task', JSON.stringify(taskList))
  // // }
  // // onCompleteTask(id) {
  // //   this.tasks.map((task) => {
  // //     if (task.id === id) {
  // //       task.done = !task.done
  // //     }
  // //   })
  // //   localStorage.setItem('task', JSON.stringify(this.tasks))

  // }
  // changeColor(done) {
  //   if (done) {
  //     return 'green !important'
  //   } else {
  //     return 
  //   }
  // }

}
