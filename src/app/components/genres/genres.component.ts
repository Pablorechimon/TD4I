import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Genre } from 'src/app/models/genre';
import { FetchGamesInfoService } from 'src/app/Services/fetch-games-info.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres_list: Observable<any> = new Observable;
  constructor(private dataservice: FetchGamesInfoService) { 
  }

  ngOnInit(): void {
    this.genres_list = this.dataservice.getGamesGenders()
    // this.dataservice.getGamesGenders().subscribe(data  => {
    //   this.genres_list = data.results;
    //   console.log(this.genres_list);
    // })
  }

}
