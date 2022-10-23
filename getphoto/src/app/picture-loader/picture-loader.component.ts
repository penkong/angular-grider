import { Component, OnInit } from '@angular/core';
import { PhotoGetterService } from '../photo-getter.service';

@Component({
  selector: 'app-picture-loader',
  templateUrl: './picture-loader.component.html',
  styleUrls: ['./picture-loader.component.css'],
})
export class PictureLoaderComponent implements OnInit {
  pic = '';
  constructor(private photoService: PhotoGetterService) {}

  ngOnInit(): void {}

  getPhoto() {
    this.photoService.getPhoto().subscribe(s => {
      this.pic = s;
    });
  }
}
