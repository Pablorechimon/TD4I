import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Stream } from '../models/streams';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})


export class FetchDataService {


  constructor(private http: HttpClient) {
   }
    
  //Get Token
  getStreams(language: string): Observable<Stream[]> {
    
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer k7cue395wsytw86ejun339rwcv9qia`,
      'client-id': 'xnkcunhmnk9uq77nf9poao5zeherd0'
    })
    return this.http.get<Stream[]>("https://api.twitch.tv/helix/streams?language=" + language , { headers: headers })
    .pipe(
      map((response: any) => {
        let streams: Stream[];
        let dataSource = (response && response["data"]) || [];

        streams = dataSource.map((stream: any) => {
          return {
            id: stream["id"],
            streamer: stream["user_name"],
            game: stream["game_name"],
            idioma: stream["language"],
            program_title: stream["title"],
            viewer_count: stream["viewer_count"],
            transmition_started_at: stream["started_at"]
          } as Stream;
        });
        return streams;
      })
    )
  }
}
