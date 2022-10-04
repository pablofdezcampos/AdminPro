import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { filter, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnDestroy{

  public title!: string;
  public titleSub$!: Subscription;

  constructor(private router: Router) {
    this.titleSub$ = this.getArgumentsTitle()
      .subscribe(({title}) => { //Desestructuration of the argument, we are passing the value of the map
        this.title = title;
        document.title = `AdminPro - ${title}`; //The title on the window1
    });
   }

  ngOnDestroy(): void {
    this.titleSub$.unsubscribe();
  }

   getArgumentsTitle(){
    return this.router.events
    .pipe(
      filter( (event: any) => event instanceof ActivationEnd),
      filter((event : ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => event.snapshot.data)
    );
}

}
