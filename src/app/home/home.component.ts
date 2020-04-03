import { Component, OnInit, Input } from "@angular/core";
import { ITask } from "../interfaces/task-interface";
import { Observable, Subscription } from "rxjs";
import { TaskService } from "../services/task.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent {}
