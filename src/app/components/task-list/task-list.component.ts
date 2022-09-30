import { Component, OnInit } from '@angular/core';
import { ITask, LEVELS } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  task1: ITask = {
    title: "Task 1",
    description: "Descripcion 1",
    completed: false,
    level: LEVELS.Info
  }
  task2: ITask = {
    title: "Task 2",
    description: "Descripcion 2",
    completed: true,
    level: LEVELS.Urgent
  }
  constructor() { }

  ngOnInit(): void {
  }


  public deleteTask(task: ITask): void{
    alert(`Se procede a eliminar la task: ${task.title}`)
  }
}
