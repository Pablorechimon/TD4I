import { Component, Input, OnInit } from '@angular/core';
import { Stream } from '../../../models/streams';


@Component({
  selector: 'app-stream-view',
  templateUrl: './stream-view.component.html',
  styleUrls: ['./stream-view.component.css']
})
export class StreamViewComponent implements OnInit {
  @Input() streamer: Stream;

  
  constructor() { }

  ngOnInit(): void {
    // console.log(this.streamer.streamer); /
    // console.log(this.streamer.game); / 
    
  }



}
