import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/game';
import { FetchGamesInfoService } from 'src/app/Services/fetch-games-info.service';

@Component({
  selector: 'app-games-components',
  templateUrl: './games-components.component.html',
  styleUrls: ['./games-components.component.css']
})
export class GamesComponentsComponent implements OnInit {
  games_list: Game[];
  constructor(private dataservice: FetchGamesInfoService) { 
    this.games_list = new Array<Game>();
  }

  ngOnInit(): void {
    this.dataservice.getGamesInfo().subscribe(data  => {
      this.games_list = data.results;
      console.log(this.games_list);
    })
  }

  
}
