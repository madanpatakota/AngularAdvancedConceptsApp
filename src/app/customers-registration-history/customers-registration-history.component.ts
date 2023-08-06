import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-customers-registration-history',
  templateUrl: './customers-registration-history.component.html',
  styleUrls: ['./customers-registration-history.component.css'],
})
export class CustomersRegistrationHistoryComponent {
  @Input('CustomerRecord') CustomerRecord: any = {};

  CustomerRecords: any = [];
  evtGetLatestRecords() {
    this.CustomerRecords.push(this.CustomerRecord);
  }
}
