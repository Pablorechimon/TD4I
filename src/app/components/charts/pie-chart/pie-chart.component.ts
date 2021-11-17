import { Component, Input, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip, Color } from 'ng2-charts';
import { Observable } from 'rxjs';
import { Stream } from 'src/app/models/streams';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.css']
})
export class PieChartComponent implements OnInit {
    @Input() streams$: Observable<Stream[]>[] = [];
    public showdata1: boolean = false;
    public showdata2: boolean = false;
    public viewers_count_data: Stream[] = [];
  


    // Pie
    public pieChartOptions: ChartOptions = {
      responsive: true,
    };
    public pieChartLabels: Label[] = [['Latin American'], ['English']];
    public pieChartData: SingleDataSet = [0,0];
    public pieChartType: ChartType = 'pie';
    public pieChartLegend = true;
    public pieChartPlugins = [];
    public pieChartColors: Color[] = [
      { backgroundColor: ['rgb(143, 53, 245)', '#222222', 'grey' ]}

    ]
    constructor() {
      monkeyPatchChartJsTooltip();
      monkeyPatchChartJsLegend();
    }

    ngOnInit() {
      this.streams$[0].subscribe(streams => {
        if (streams && streams.length){
          this.viewers_count_data = streams;
          const viewers_count: number[] = this.viewers_count_data.map(element => element.viewer_count);
          const reducer = (previousValue:number, currentValue:number) => previousValue + currentValue;
          const total_viewers_es = viewers_count.reduce(reducer);
          // console.log("Total Es:", total_viewers_es);
          this.pieChartData[0] = total_viewers_es;
          this.showdata1 = true;
    }
  });
        this.streams$[1].subscribe(streams => {
          if (streams && streams.length){
            this.viewers_count_data = streams;
            const viewers_count: number[] = this.viewers_count_data.map(element => element.viewer_count);
            const reducer = (previousValue:number, currentValue:number) => previousValue + currentValue;
            const total_viewers_en = viewers_count.reduce(reducer);
            // console.log("Total EN:", total_viewers_en);
            this.pieChartData[1] = total_viewers_en;
            this.showdata2 = true;
      }
    })
  
}
}