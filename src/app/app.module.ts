import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { TestcomponentComponent } from './components/testcomponent/testcomponent.component';
import { HttpClientModule } from '@angular/common/http';
import { StreamsComponent } from './components/Streams-Components/streams/streams.component';
import { StreamsListComponent } from './components/Streams-Components/streams-list/streams-list.component';
import { StreamViewComponent } from './components//Streams-Components/stream-view/stream-view.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartComponent } from './components/charts/bar-chart/bar-chart.component';
import { PieChartComponent } from './components/charts/pie-chart/pie-chart.component';
import { ScatterChartComponent } from './components/charts/scatter-chart/scatter-chart.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    TestcomponentComponent,
    StreamsComponent,
    StreamsListComponent,
    StreamViewComponent,
    BarChartComponent,
    PieChartComponent,
    ScatterChartComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
