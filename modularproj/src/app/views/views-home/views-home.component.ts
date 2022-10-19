import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.scss'],
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 34, label: '# of Users' },
    { value: 43, label: 'Revenue' },
    { value: 3453, label: 'Reviews' },
  ];

  items = [
    { image: '/assets/imgs/couch.jpeg', title: 'couch', description: 'i am description' },
    { image: '/assets/imgs/dresser.jpeg', title: 'Dresser', description: 'i am description' }
  ]

  constructor() {}

  ngOnInit(): void {}
}
