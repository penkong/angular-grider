import { Component } from '@angular/core';
import { WikiService } from './wiki.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pageList = []
  constructor(private wiki: WikiService) {}

  onTerm(term: string) {
    this.wiki.search(term).subscribe((res: any) => {
      this.pageList = res.query.search
    })
  }
}
