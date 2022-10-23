import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class WikiService {
  constructor(private http: HttpClient) {}

  search(term: string) {
    return this.http.get<IWiki>(`https://en.wikipedia.org/w/api.php`, {
      params: {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: '1',
        srsearch: term,
        origin: '*',
      },
    }).pipe(map(x => x.query.search));
  }
}


export interface IWiki {
  batchcomplete: string,
  continue: object
  query : {
    search: {
      pageid: number
      title: string
      snippet: string
    }[]
  }
}