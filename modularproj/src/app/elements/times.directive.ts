import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appTimes]'
})
export class TimesDirective {

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) { }

  @Input('appTimes') set render(n: number) {
    this.view.clear()
    for (let i = 0; i < n; i++) {
      this.view.createEmbeddedView(this.template, {})
    }
  }
}
