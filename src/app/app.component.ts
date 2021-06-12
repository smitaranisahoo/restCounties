import { Component, Input } from '@angular/core';
import data from '../assets/data.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() items: any;
  title = 'restCounties';
  // public countryList:{name: string,capital: string}[]= data;
 

}
