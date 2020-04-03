import { Component, Input, Output } from "@angular/core";
import { ITask } from "../interfaces/task-interface";
import { TaskService } from "../services/task.service";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent {
  tasks: BehaviorSubject<ITask[]> = new BehaviorSubject(this.taskService.tasks);
  tasks$ = this.tasks.asObservable();
  @Output() id: ITask["id"];

  constructor(private taskService: TaskService) {}

  sortByDate(a, b) {
    let c = new Date(a.date);
    let d = new Date(b.date);
    return d.getTime() - c.getTime();
  }

  ngOnInit() {
    this.taskService.tasks$.subscribe(data => {
      if (data) {
        let sortedData = data.sort(this.sortByDate);
        this.tasks.next(sortedData);
      }
    });
  }
}
