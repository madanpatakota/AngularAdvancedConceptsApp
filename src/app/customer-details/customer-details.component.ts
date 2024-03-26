import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent {

  //Taking the record from Parent of CustomerDetailsComponent
  //In this scenerio parent Component is Appcomponent.
  @Input('CustomerRecord') CustomerRecord:any;

}
