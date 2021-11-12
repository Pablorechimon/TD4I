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
  // @Output() viewers_count_data: Stream[] = [];

  constructor() { }

  ngOnInit(): void {
    // this.streams$.subscribe(data => data.forEach(element => {
    //   this.viewers_count_data.push(element);
      // console.log(this.viewers_count_data);
    // }));
  }

}
