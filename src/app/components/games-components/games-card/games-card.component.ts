import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Game } from 'src/app/models/game';

@Component({
  selector: 'app-games-card',
  templateUrl: './games-card.component.html',
  styleUrls: ['./games-card.component.css']
})
export class GamesCardComponent implements OnInit {
@Input() game: Game;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
