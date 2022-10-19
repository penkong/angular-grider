import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collection-home',
  templateUrl: './collection-home.component.html',
  styleUrls: ['./collection-home.component.scss']
})
export class CollectionHomeComponent implements OnInit {
  data = [
    {name : 'james', age : 34 , job : 'Designer '},
    {name : 'jame2', age : 31 , job : 'art '},
    {name : 'jam', age : 32 , job : 'Fart'}
  ]
  
  header = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job'} 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
