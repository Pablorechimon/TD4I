import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { TopGames } from '../models/topgames';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FetchTopGamesService {

  constructor(private http: HttpClient) { }

  getTopGames(): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer k7cue395wsytw86ejun339rwcv9qia`,
      'client-id': 'xnkcunhmnk9uq77nf9poao5zeherd0'
    })
    return this.http.get("https://api.twitch.tv/helix/games/top", {headers: headers})
    .pipe(map((response: any) => console.log(response)))

  }
}

