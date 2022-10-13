import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  posts = [
    {
      title: 'neat tree',
      username: '@nature',
      imgUrl: 'assets/tree.jpeg',
      content: 'i saw it today',
    },
    {
      title: 'moutain',
      username: '@mountain',
      imgUrl: 'assets/mountain.jpeg',
      content: 'i asw it yesterday',
    },
    {
      title: 'biking',
      username: '@biking',
      imgUrl: 'assets/biking.jpeg',
      content: 'i will it tomorrow',
    },
  ];
}
