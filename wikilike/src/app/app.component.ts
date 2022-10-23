import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { WikiService, IWiki } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageList: {
    pageid: number
    title: string
    snippet: string
  }[] = []
  constructor(private wiki: WikiService) {}

  onTerm(term: string) {
    this.wiki.search(term).subscribe(res => {
      this.pageList = res
    })
  }
}
