import { Directive, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLifeCycle]'
})
export class LifeCycleDirective implements OnInit, OnChanges, OnDestroy {

  constructor() { }



  ngOnInit(): void {
    this.lifeCycle('OnInit');
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.lifeCycle('OnChange', changes);
  }
  ngOnDestroy(): void {
    this.lifeCycle('OnDestroy')
  }

  lifeCycle(hook: string, changes?:SimpleChanges){
    console.log(`Ciclo de vida ${hook}`);
    if(changes){
    console.log(`Cambios ${changes}`);

    }
  }
}
