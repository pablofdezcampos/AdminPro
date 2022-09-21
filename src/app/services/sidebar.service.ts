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
        {title: 'ProgressBar', url: 'progress'},
        {title: 'Graphic1', url: 'graphic1'},
      ]
    }
  ];

  constructor() { }
}
