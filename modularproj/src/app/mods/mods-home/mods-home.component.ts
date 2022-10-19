import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss'],
})
export class ModsHomeComponent implements OnInit {
  visible = false;

  accData = [
    { title: 'title1', content: 'content 1' },
    { title: 'title 2', content: 'content 3' },
    { title: 'title 3', content: 'content 445' }
  ];
  
  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.visible = !this.visible;
  }
}
