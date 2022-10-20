import { Component, OnInit, Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  term = ''
  @Output('term') submitted = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

  onInput(e : Event) {
    this.term = (e.target as HTMLInputElement).value
  }

  onSubmit(e: Event) {
    e.preventDefault()
    this.submitted.emit(this.term)
  }
}
