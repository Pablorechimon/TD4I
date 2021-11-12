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
  streamers2: Observable<Stream[]>[] = [];
  streamers3: Observable<Stream[]>[] = [];



  constructor(private fetchStreams: FetchDataService) { 
    var streamers_es = this.fetchStreams.getStreams("es");
    var streamers_en = this.fetchStreams.getStreams("en");
    var streamers_br = this.fetchStreams.getStreams("br");
    var streamers_fr = this.fetchStreams.getStreams("fr");
    var streamers_de = this.fetchStreams.getStreams("de");
    this.streamers.push(streamers_es);
    this.streamers.push(streamers_br);
    this.streamers.push(streamers_en);
    this.streamers.push(streamers_fr);
    this.streamers.push(streamers_de);
    
   }

  ngOnInit(): void {
    // this.fetchLiveStreams().forEach(data => console.log(data))
    // this.streamers.subscribe(data => data.forEach(element => console.log(element.streamer)))
  }
}
