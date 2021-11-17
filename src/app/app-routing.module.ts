import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StreamsPagesComponent } from './pages/streams-pages/streams-pages.component';
import { GamesPagesComponent } from './pages/games-pages/games-pages.component';
import { IndexPagesComponent } from './pages/index-pages/index-pages.component';
import { GenresPagesComponent } from './pages/genres-pages/genres-pages.component';
import { GameDetailComponent } from './components/games-components/game-detail/game-detail.component';

const routes: Routes = [
  { path: 'inicio', component: IndexPagesComponent},
  { path: 'streams', component: StreamsPagesComponent },
  { path: 'games', component: GamesPagesComponent },
  { path: 'games/:gameID', component: GameDetailComponent },
  { path: 'genres', component: GenresPagesComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: '**', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
