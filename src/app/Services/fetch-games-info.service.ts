import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Game } from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class FetchGamesInfoService {
  api: string = "https://api.rawg.io/api"
  gamesEndpoint: string = "/games"
  genresEndpoint: string = "/genres"
  params = new HttpParams();
  

  constructor(private http: HttpClient) { 
    this.params = this.params.append('key', environment.keyRAW).append('page_size','40');
  }

  get(path: string): Observable<any> {
    return this.http.get(this.api + path, {params: this.params})
    .pipe(
      retry(1)
    )
  }

  getGamesInfo():Observable<any>{
    return this.get(this.gamesEndpoint)
  }

  getGamesInfoByID(id: number):Observable<any>{
    return this.get(this.gamesEndpoint + "/" + id.toString())
  }

  getGamesGenders():Observable<any>{
    return this.get(this.genresEndpoint)
  }
}




