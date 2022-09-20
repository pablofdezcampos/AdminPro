import { Component } from '@angular/core';

@Component({
  selector: 'app-graphic1',
  templateUrl: './graphic1.component.html',
  styles: [
  ]
})

export class Graphic1Component {
  public sellLabels: string[] = ['Dowload Sells', 'In-Store Sells', 'Mail-Order Sells'];
  public rentalsLabels: string[] = ['Dowload Rentals', 'In-Store Rentals', 'Mail-Order Rentals'];
  public pawnsLabels: string[] = ['Dowload Pawns', 'In-Store Pawns', 'Mail-Order Pawns'];

}
