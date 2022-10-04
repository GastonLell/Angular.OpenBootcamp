import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appMouseOver]'
})
export class MouseOverDirective {
  @Input() defaultColor = '';
  @Input('appMouseOver') backgroundColor = '';

  @HostListener('mouseenter') onMouseEnter(){
    this.changeColor(this.backgroundColor || this.defaultColor || 'green', 'white')
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.changeColor(null, null)

  }
  constructor(private _elementRef: ElementRef) { }

  private changeColor(backgroundColor: string | null, color: string | null){
    this._elementRef.nativeElement.style.backgroundColor = backgroundColor;
    this._elementRef.nativeElement.style.color = color;
  }

}
