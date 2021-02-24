import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';



@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
 // Properties: Array<any> ;
  Properties: Array<IProperty> ;
  constructor(private route: ActivatedRoute,  private housingService:HousingService ) { }
  SellRent = 1;

  ngOnInit(): void {
if(this.route.snapshot.url.toString()){
  this.SellRent = 2;
  //Means we are on rent-property URL else we are on base url
}
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data =>{
             this.Properties=data;
               console.log(data);
             }, error =>{
               console.log(error);
               //This error condition is used in when api server is down and sometimes database is down so thats why use the conditions
             }
    );


}
}
