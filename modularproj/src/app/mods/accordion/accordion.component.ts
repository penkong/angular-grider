import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnInit {

  @Input() accData: Array<any> = []
  openIdx = 0;
  constructor() { }

  ngOnInit(): void {
  }

  onClick(idx: number) {
    if (idx === this.openIdx) this.openIdx = -1;
    else this.openIdx = idx
  }
}
