import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private el: ElementRef) {}

  @Input('appClass') set classNames(c: any) {
    for (const key in c) {
      if(c[key]) {
        this.el.nativeElement.classList.add(key)
      } else {
        this.el.nativeElement.classList.remove(key);
      }
    }
  }
}
