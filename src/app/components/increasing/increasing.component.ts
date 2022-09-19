import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-increasing',
  templateUrl: './increasing.component.html',
  styles: [
  ]
})


export class IncreasingComponent implements OnInit {

  ngOnInit() {
    this.classButton = `btn ${this.classButton}`
  }

  @Input('progressValue') progress: number = 25;
  @Input() classButton: string = 'btn-primary'

  @Output() progressChange: EventEmitter<number> = new EventEmitter();

   get getPercentaje() {
     return `${this.progress}%`;
   }


  changeValue(value: number){

    if(this.progress >= 100 && value >= 0){
      this.progressChange.emit(100);
      return this.progress = 100;
    }

    if(this.progress <= 0 && value < 0){
      this.progressChange.emit(0);
      return this.progress = 0;
    }

    this.progress = this.progress + value;
    return this.progressChange.emit(this.progress);
  }

  onChange(newValue: number){

    if(newValue >= 100){
      this.progress = 100;
    } else if(newValue <= 0){
      this.progress = 0;
    } else {
      this.progress = newValue;
    }

    this.progressChange.emit(this.progress);
  }
}
