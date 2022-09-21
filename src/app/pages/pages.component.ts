import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../services/settings.service';

declare function customInitFunctions(): void;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  //The injection of the settings service is necesary to the persistence of the theme
  constructor(private settingsservice: SettingsService) { }

  ngOnInit(): void {
    customInitFunctions();
  }

}
