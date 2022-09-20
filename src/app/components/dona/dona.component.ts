import { Component, Input, SimpleChanges } from '@angular/core';
import { ChartData, ChartEvent, ChartType } from 'chart.js';


@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent {

  ngOnChanges(changes: SimpleChanges): void {
    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        {
          data: [350, 450, 100],
          backgroundColor: ['#6857E6', '#009FEE', '#F02059'],
          hoverBackgroundColor: ['#0000FF','#0000FF','#0000FF'],
          hoverBorderColor:['#000000','#000000','#000000']
        }
      ]
    }
  }



  @Input() title: string = '';

  @Input('labels') doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];

  @Input('data') doughnutChartData: ChartData<'doughnut'> = {
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
