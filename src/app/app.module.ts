import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';

// Material
// @Angular-Material
import {MatIconModule} from '@angular/material/icon'
import {MatToolbarModule} from '@angular/material/toolbar'

// App components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { StreamsComponent } from './components/Streams-Components/streams/streams.component';
import { StreamsListComponent } from './components/Streams-Components/streams-list/streams-list.component';
import { StreamViewComponent } from './components//Streams-Components/stream-view/stream-view.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/charts/scatter-chart/scatter-chart.component';
import { StreamsPagesComponent } from './pages/streams-pages/streams-pages.component';
import { GamesPagesComponent } from './pages/games-pages/games-pages.component';
import { IndexPagesComponent } from './pages/index-pages/index-pages.component';
import { GamesComponentsComponent } from './components/games-components/games-components.component';
import { GamesCardComponent } from './components/games-components/games-card/games-card.component';
import { GenresComponent } from './components/genres/genres.component';
import { GenresPagesComponent } from './pages/genres-pages/genres-pages.component';
import { DoughnutChartComponent } from './components/charts/doughnut-chart/doughnut-chart.component';
import { GameDetailComponent } from './components/games-components/game-detail/game-detail.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StreamsComponent,
    StreamsListComponent,
    StreamViewComponent,
    BarChartComponent,
    PieChartComponent,
    ScatterChartComponent,
    StreamsPagesComponent,
    GamesPagesComponent,
    IndexPagesComponent,
    GamesComponentsComponent,
    GamesCardComponent,
    GenresComponent,
    GenresPagesComponent,
    DoughnutChartComponent,
    GameDetailComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
