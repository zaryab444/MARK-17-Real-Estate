import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  Properties: Array<any> = [
    {
    "Id":1,
    "Name": "Zaryab House",
    "Type":"House",
    "Price": 1200000
  },
  {
    "Id":2,
    "Name": "Shahroz House",
    "Type":"Plot",
    "Price": 2000000
  },
  {
    "Id":3,
    "Name": "Ahsan House",
    "Type":"Flat",
    "Price": 1300000
  },
  {
    "Id":4,
    "Name": "Minaj House",
    "Type":"bugalow",
    "Price": 2400000
  },


  {
    "Id":5,
    "Name": "Minaj House",
    "Type":"bugalow",
    "Price": 2400000
  },


  {
    "Id":6,
    "Name": "Minaj House",
    "Type":"bugalow",
    "Price": 2400000
  },


]

  constructor() { }

  ngOnInit(): void {
  }

}
