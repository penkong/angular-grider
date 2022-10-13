import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  lengthOfPass = 0;
  password = '';
  useLetter= false;
  useNumber = false;
  useSymbol = false;

  onLengthChange(e : Event) {
    const val = parseInt((e.target as HTMLInputElement).value)
    if(!isNaN(val)) this.lengthOfPass = val
  }

  onLetterChange() {
    this.useLetter = !this.useLetter;
  }

  onNumberChange() {
    this.useNumber = !this.useNumber
  }

  onSymbolChange() {
    this.useSymbol = !this.useSymbol
  }

  onButtonClick() {
    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstwxyz'
    const symbols = '!@#$%^&*()_+|?'
    let valid = '';
    if (this.useLetter) valid += letters;
    if (this.useNumber) valid += numbers;
    if (this.useSymbol) valid += symbols;
    let genPass = '' 
    for(let i = 0; i < this.lengthOfPass; i++) {
      const idx = Math.floor(Math.random() * valid.length)
      genPass += valid[idx]
    }
    this.password = genPass;
  }
}
