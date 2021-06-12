import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
   items: any;
  constructor( private appSettingsService : ApiService) { }
  ngOnInit(): void {
   this.appSettingsService.getcountry().subscribe( data => {
 this.items = data;
    })
   
  }

}

