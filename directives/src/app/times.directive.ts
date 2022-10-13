import { Directive , TemplateRef , ViewContainerRef , Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(
    // ref to element we applied directive to
    private view: ViewContainerRef, 
    // ref to elements put inside view one 
    private template: TemplateRef<any>
  ) { 

  }

  @Input('appTimes') set render(times: number) {
    this.view.clear()
    for (let i = 0; i < times; i++) {
      this.view.createEmbeddedView(this.template, {})
    }
  }

}
