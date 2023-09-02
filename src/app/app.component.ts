import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularAdvancedConceptsApp';

  Customer = { Name: 'Robert', Email: 'Robert@gmail.com', Password: '!@&&*9*' };

  CustomerLatestRecord = {};

  @ViewChild('customerName') vCustomerName : ElementRef<any>;

  evtCustomerReceiveInfo($event: any) {
    this.Customer = $event;
    console.log(this.Customer);
    this.CustomerLatestRecord = $event;
  }

  updateCustomerName(){
     //this.Customer.Name = this.vCustomerName.nativeElement.value;
     //this.Customer = this.Customer;
     this.Customer = { ...this.Customer,  "Name" : this.vCustomerName.nativeElement.value };
  }
}
