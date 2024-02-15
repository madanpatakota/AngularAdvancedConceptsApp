import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'AngularAdvancedConceptsApp';

  Customer = { Name: 'Robert', Email: 'Robert@gmail.com', Password: '!@&&*9*' };

  
  /* Prepare this object for send the data to the customer details component and customer history component*/
  CustomerLatestRecord = {};

  
  evtCustomerReceiveInfo($event: any) {
    this.Customer = $event;
    console.log(this.Customer);

    /* referring the latest record from $event*/
    this.CustomerLatestRecord = $event;
  }
}
