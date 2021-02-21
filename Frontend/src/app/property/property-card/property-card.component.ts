import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
Property: any = {
  "Id":1,
  "Name": "Zaryab House",
  "Type":"House",
  "Price": 1200000
}
  constructor() { }

  ngOnInit(): void {
  }

}
