import { Component } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent  {

  percentaje1: number = 15;
  percentaje2: number = 60;

  get getPercentaje1(){
    return `${this.percentaje1}%`;
  }

  get getPercentaje2(){
    return `${this.percentaje2}%`;
  }
}
