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
  public showdata: boolean = false;
  public viewers_count_data: Stream[] = [];

  public barChartOptions: ChartOptions = {
    responsive: true,
  };
  public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [];
    public barChartColors: Color[] = [
    { backgroundColor: 'blue' },
    { backgroundColor: 'green' }
  ]

  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    this.streams$[0].subscribe(streams => {
      if (streams && streams.length){
        this.viewers_count_data = streams;
        const viewers_count: number[] = this.viewers_count_data.map(element => element.viewer_count);
        const streamers: string[] = this.viewers_count_data.map(element => element.streamer);

        // console.log(this.viewers_count_data);
        // console.log(viewers_count);
        // console.log(streamers);
        const streamBarCharData: ChartDataSets[] = [
          { data: viewers_count, label: 'Latin American' }
        ];
        const streamBarChartLabels: Label[] = streamers;
        this.barChartLabels = streamBarChartLabels
        this.barChartData = streamBarCharData;
        this.showdata = true;
      }
    });
    this.streams$[1].subscribe(streams => {
      if (streams && streams.length){
        this.viewers_count_data = streams;
        const viewers_count: number[] = this.viewers_count_data.map(element => element.viewer_count);
        const streamers: string[] = this.viewers_count_data.map(element => element.streamer);

        // console.log(this.viewers_count_data);
        // console.log(viewers_count);
        // console.log(streamers);
        const streamBarCharData: ChartDataSets[] = [
          { data: viewers_count, label: 'English' }
        ];
        this.barChartLabels = this.barChartLabels.map((element, index) => element + " - " + streamers[index])
        this.barChartData.push(streamBarCharData[0]);
        this.showdata = true;
      }
    })

    // console.log(this.viewers_count_data);
    
    
    // this.viewers_count_data.map(element => console.log(element.viewer_count));
    
  }
}
