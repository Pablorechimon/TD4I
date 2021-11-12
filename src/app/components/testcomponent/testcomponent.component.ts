import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FetchDataService } from 'src/app/Services/fetch-data.service';
import { FetchTopGamesService } from 'src/app/Services/fetch-top-games.service';

@Component({
  selector: 'app-testcomponent',
  templateUrl: './testcomponent.component.html',
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent implements OnInit {
  topgames: Observable<any[]>;
  constructor(private dataService: FetchTopGamesService) { 
    this.topgames = this.dataService.getTopGames();
  }

  ngOnInit(): void {
    this.fetchTopGames().forEach(element => console.log(element))
  }

  fetchTopGames(){
    return this.topgames;
  }
}
