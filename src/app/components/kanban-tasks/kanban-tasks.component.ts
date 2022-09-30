import { Component } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { ITask, LEVELS } from 'src/app/models/interfaces/Task.interface';
@Component({
  selector: 'app-kanban-tasks',
  templateUrl: './kanban-tasks.component.html',
  styleUrls: ['./kanban-tasks.component.css'],
})
export class KanbanTasksComponent {

  todoTask: ITask[] = [
    {title: 'Animaciones', description: 'Aprender animaciones en Angular', completed: false, level: LEVELS.Info  },
    {title: 'Angular CLI', description: 'Aprender a gestionar Angular CLI', completed: false, level: LEVELS.Info  },
    {title: 'Angular build', description: 'Aprender a generar build en Angular', completed: false, level: LEVELS.Urgent  },
    {title: 'Deploy', description: 'Aprender a desplegar bundles en Firebase', completed: false, level: LEVELS.Urgent  }
  ]

  doneTask: ITask[] = [
    {title: 'JS y ES', description: 'Aprender JS y ES', completed: true, level: LEVELS.Info  },
    {title: 'Angular Components', description: 'Aprender a gestionar componentes en Angular', completed: true, level: LEVELS.Blocking  },
    {title: 'Angular directives', description: 'Aprender a gestionar directivas en Angular', completed: true, level: LEVELS.Info  },
    {title: 'HTTP client', description: 'Aprender a gestionar peticiones HTTP en Angular', completed: true, level: LEVELS.Urgent  }
  ]


  drop(event: CdkDragDrop<ITask[]>): void {
    if (event.previousContainer === event.container) {

      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      event.previousContainer.data[event.previousIndex].completed = !event.previousContainer.data[event.previousIndex].completed;

      event.container.data[event.currentIndex].level = LEVELS.Info
      transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex);
    }
  }
}
