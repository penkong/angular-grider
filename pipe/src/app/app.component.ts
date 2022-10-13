import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  named: string = '';
  data: string = '';
  amount: number = 0;
  miles: number = 0;

  onMilesChange(e: Event){ 
    this.miles = +(e.target as HTMLInputElement).value
  }
  onNameChange(e: Event) {
    this.named = (e.target as HTMLInputElement).value
  }

  onDateChange(e: Event) {
    this.data = (e.target as HTMLInputElement).value
  }


  onAmountChange(e: Event) {
    this.amount = +(e.target as HTMLInputElement).value
  }
}
