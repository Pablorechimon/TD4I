import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Genre } from 'src/app/models/genre';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.css']
})
export class DoughnutChartComponent implements OnInit {
@Input() genres: Observable<any> = new Observable;
  showdata: boolean = false;

 // Doughnut
 public doughnutChartLabels: Label[] = [" "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ",];
 public doughnutChartData: MultiDataSet = [
   [0, 0, 0,0],
   [0, 0, 0,0],
   [0, 0, 0,0],
   [0, 0, 0,0],
   [0, 0, 0,0],
 ];
 public doughnutChartType: ChartType = 'doughnut';

  constructor() {
   }

   ngOnInit(): void {

    this.genres.subscribe(data => {
      data.results.forEach((element:any, index:any) => {
        this.doughnutChartLabels[index] = element.name;
        if(index <= 3 ){
              this.doughnutChartData[0][index] = element.games_count;
            } 
            else if(index <= 7 ) {
              this.doughnutChartData[1][index] = element.games_count;
            }
            else if(index <= 11 ) {
              this.doughnutChartData[2][index] = element.games_count;
            }
            else if(index <= 15 ){
              this.doughnutChartData[3][index] = element.games_count;
            }
            else {
              this.doughnutChartData[4][index] = element.games_count;
            }
        this.showdata = true;
      });
    })
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);

}
}
