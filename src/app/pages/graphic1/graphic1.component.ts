import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [
  ]
})

export class Graphic1Component {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      {
        data: [ 350, 450, 100 ],
        backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
        hoverBackgroundColor: ['#0000FF','#0000FF','#0000FF'],
        hoverBorderColor:['#000000','#000000','#000000']
      }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

}
