import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
})
export class CustomerRegistrationComponent {
  @Input('CustomerInfo') CustomerInfo: any;

  evtClearData() {
    this.CustomerInfo = { Name: '', Email: '', Password: '' };
  }

  @Output('CustomerEventEmitter') customerEmitter = new EventEmitter<any>();

  @ViewChild('CustomerName') vCustomerName: ElementRef;
  @ViewChild('CustomerEmail') vCustomerEmail: ElementRef;
  @ViewChild('CustomerPassword') vCustomerPassword: ElementRef;

  evtPostData() {
    this.customerEmitter.emit({
      Name: this.vCustomerName.nativeElement.value,
      Email: this.vCustomerEmail.nativeElement.value,
      Password: this.vCustomerPassword.nativeElement.value,
    });
  }
}
