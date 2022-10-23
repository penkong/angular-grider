import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoGetterService {

  constructor(private http: HttpClient) {
  }

  getPhoto() {
    return this.http.get<IPhoto>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID Baflb63NXgWWHOl7VztCz_KC-sIECTnMAreinTCdzRw'
      }
    }).pipe(map(x => x.urls.regular))
  }
}


export interface IPhoto {
  urls : {
    regular: string
  }
}