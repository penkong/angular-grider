import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mods-home',
  templateUrl: './mods-home.component.html',
  styleUrls: ['./mods-home.component.scss']
})
export class ModsHomeComponent implements OnInit {
  visible = false;
  constructor() { }

  ngOnInit(): void {
  }

  onClick() {
    this.visible = !this.visible
  }
}
