import { Component } from '@angular/core';
import * as faker from '@faker-js/faker'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = faker.faker.lorem.sentence();
  enteredText = '';
  success = false;
  onInput(e: Event) {
    this.enteredText = (e.target as HTMLInputElement).value;
  }

  styled(currend: string , entered: string) {
    if(!entered) return 'pending';
    return entered === currend ? 'correct' : 'incorrect'
  }
}
