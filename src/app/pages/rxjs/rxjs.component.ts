import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, interval, map, observable, Observable, retry, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styles: [
  ]
})
export class RxjsComponent implements OnDestroy{

  public internalSubs: Subscription = new Subscription;

  constructor() {

    //.pipe => to manage the data, .subscribe to push the app
    this.returnObservable().pipe(
      retry()
    ).subscribe(
      //value catch the value of the observable that put with .next the values
     value => console.log('Subs: ', value),
     err => console.warn('Err:', err),
     () => console.info('End')
    );

    //emit 10 values that are even plus 1 per the map
    /*this.returnInterval().pipe().subscribe(
      value => console.log('Subs: ', value),
      err => console.warn('Err:', err),
      () => console.info('End')
    );*/

    this.internalSubs = this.returnInterval().subscribe(console.log);

  }

  returnInterval(){
    //take define the number of taken values with the conditions of filter
    return interval(100) //interval emit the values per the time you put into
      .pipe(
        take(10),
        //filter to filter the values that an even number, it is false when it is an odd number
        filter(value => (value % 2 == 0) ? true : false),
        map(value => value + 1));
  }

  returnObservable(): Observable<number>{
    let i = -1;

    const obs$ = new Observable<number>( observable => {

      const interval = setInterval(() => {

        i++;
        //.next emit a value
        observable.next(i);

        if( i === 4){
          clearInterval(interval);
          //.complete to finish the interval, in the i = 4, the observable does not emit more values
          observable.complete();
        }

        if ( i === 2){
          //With .error the observable does not continue, it finish
          observable.error('Value of i equals 2');
        }

      }, 1000);

    });

    return obs$;

  }

  ngOnDestroy(): void {
    this.internalSubs.unsubscribe();
  }

}
