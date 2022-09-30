import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITask } from 'src/app/models/interfaces/Task.interface';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: ITask | undefined;
  @Output() delete: EventEmitter<ITask> = new EventEmitter<ITask>();
  constructor() { }

  ngOnInit(): void {
  }
  deleteTask(): void{
    console.log('Eliminar tarea', this.task?.title)
    this.delete.emit(this.task); //notoficamos la tarea a eliminar a componente superior
  }
}
