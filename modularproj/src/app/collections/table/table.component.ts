import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input('class') classNames = '';

  @Input() data: Array<any>= [];
  @Input() header: Array<any>= [];
  
  constructor() { }

  ngOnInit(): void {
  }

}
