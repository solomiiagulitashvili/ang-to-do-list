import { Component, OnInit, Input } from "@angular/core";
import { ITask } from "../interfaces/task-interface";
import { Observable, Subscription } from "rxjs";
import { TaskService } from "../task.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  @Input() id: ITask["id"];
  title = "ang-to-do-list";
  tasks: ITask[];

  constructor(private taskService: TaskService) {}

  sortByDate(a, b) {
    let c = new Date(a.date);
    let d = new Date(b.date);
    return d.getTime() - c.getTime();
  }
  ngOnInit() {
    this.taskService.tasks$.subscribe(data => {
      if (data) {
        this.tasks = data.sort(this.sortByDate);
      }
    });
  }
}
