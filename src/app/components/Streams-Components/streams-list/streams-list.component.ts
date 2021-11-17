import { Component, Input, OnInit, Output } from '@angular/core';
import { Stream } from '../../../models/streams';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-streams-list',
  templateUrl: './streams-list.component.html',
  styleUrls: ['./streams-list.component.css']
})
export class StreamsListComponent implements OnInit {
  @Input() streams$: Observable<Stream[]>[] = [];
  total_viewers_es: number = 0;
  total_viewers_en: number = 0;

  constructor() { }

  ngOnInit(): void {
    // this.streams$.subscribe(data => data.forEach(element => {
    //   this.viewers_count_data.push(element);
      // console.log(this.viewers_count_data);
    // }));
    this.streams$[0].subscribe(data => data.forEach(element => {
      this.total_viewers_es += element.viewer_count;
    }));
    this.streams$[1].subscribe(data => data.forEach(element => {
      this.total_viewers_en += element.viewer_count;
    }));
  }

}
