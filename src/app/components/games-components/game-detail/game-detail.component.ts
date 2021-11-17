import { Component, OnInit } from '@angular/core';
import { Game } from 'src/app/models/game';
import { FetchGamesInfoService } from 'src/app/Services/fetch-games-info.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
  gameID: any;
  game: any;
  constructor(private dataservice: FetchGamesInfoService, private route: ActivatedRoute,) { }

  ngOnInit(): void {
    this.gameID = this.route.snapshot.paramMap.get('gameID');

    this.dataservice.getGamesInfoByID(this.gameID).subscribe(data  => {
      this.game = data;
      console.log(this.game);
  })

}
}