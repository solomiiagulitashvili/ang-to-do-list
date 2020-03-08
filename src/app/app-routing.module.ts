import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TaskItemComponent } from './task-list/task-item/task-item.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'task/:id', component: TaskItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
