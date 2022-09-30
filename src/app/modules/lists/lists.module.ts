import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicListComponent } from './basic-list/basic-list.component';



@NgModule({
  declarations: [
    BasicListComponent
  ],
  imports: [
    CommonModule
  ],
  //exportar componentes pipes y todo lo que queramos compartir de este modulo
  exports: [BasicListComponent]
})
export class ListsModule { }
