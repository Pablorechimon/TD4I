import { Component, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchDataService } from 'src/app/Services/fetch-data.service';
import { Stream } from '../../../models/streams';

@Component({
  selector: 'app-streams',
  templateUrl: './streams.component.html',
  styleUrls: ['./streams.component.css']
})
export class StreamsComponent implements OnInit {
  streamers: Observable<Stream[]>[] = [];

  constructor(private fetchStreams: FetchDataService) { 
    var streamers_es = this.fetchStreams.getStreams("es");
    var streamers_en = this.fetchStreams.getStreams("en");
   
    this.streamers.push(streamers_es);
    this.streamers.push(streamers_en);
   }

  ngOnInit(): void {
    // this.fetchLiveStreams().forEach(data => console.log(data))
    // this.streamers.subscribe(data => data.forEach(element => console.log(element.streamer)))
  }
}
