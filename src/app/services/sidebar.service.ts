import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      submenu: [
        {title: 'Main', url: '/'},
        {title: 'Graphic1', url: 'graphic1'},
        {title: 'Promises', url: 'promises'},
        {title: 'ProgressBar', url: 'progress'},
        {title: 'rxjs', url: 'rxjs'},
      ]
    }
  ];

  constructor() { }
}
