import { Component, Input , OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label , Color } from 'ng2-charts';
import { Observable } from 'rxjs';
import { Stream } from '../../../models/streams';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {
  @Input() streams$: Observable<Stream[]>[] = [];
  public showdata1: boolean = false;
  public showdata2: boolean = false;
  public viewers_count_data: Stream[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ["1","2","3","4"];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartColors: Color[] = [
    { backgroundColor: 'rgb(143, 53, 245)' }
  ]

  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    
    this.streams$[0].subscribe(streams => {
      if (streams && streams.length){
        this.viewers_count_data = streams;
        const viewers_count: number[] = this.viewers_count_data.map(element => element.viewer_count);
        const streamers: string[] = this.viewers_count_data.map(element => element.streamer);
        const streamBarCharData: ChartDataSets[] = [
          { data: viewers_count, label: 'Latin American' }
        ];
        const streamBarChartLabels: Label[] = streamers;
        this.barChartLabels = streamBarChartLabels
        this.barChartData = streamBarCharData;
        this.showdata1 = true;
      }
    });
    this.streams$[1].subscribe(streams => {
      if (streams && streams.length){
        this.viewers_count_data = streams;
        const viewers_count: number[] = this.viewers_count_data.map(element => element.viewer_count);
        const streamers: string[] = this.viewers_count_data.map(element => element.streamer);
        const streamBarCharData: ChartDataSets[] = [
          { data: viewers_count, label: 'English' }
        ];
        this.barChartLabels = this.barChartLabels.map((element, index) => element + " - " + streamers[index])
        this.barChartData.push(streamBarCharData[0]);
        this.barChartColors.push({backgroundColor: 'grey'})
        this.showdata2 = true;
      }
    })

    // console.log(this.viewers_count_data);
    
    
    // this.viewers_count_data.map(element => console.log(element.viewer_count));
  }
}
