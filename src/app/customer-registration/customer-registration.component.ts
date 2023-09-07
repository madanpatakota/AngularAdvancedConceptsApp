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

  /*Output decorator which is  for takes the data from parent*/
  @Input('CustomerInfo') CustomerInfo: any;

  evtClearData() {
    this.CustomerInfo = { Name: '', Email: '', Password: '' };
  }

  /*Output decorator which is for sends the data to the parent*/

  /*
     1. who will be take care generally prepare the data for send 
     Ans : Event emitter 
     2. What is event emitter ?
     Ans : Which is for emits | inject |  the data into it  
           So that  what ever we are having the injected data in the eventemitter , we can refer that data to the output 
  */

  @Output('CustomerEventEmitter') customerEmitter = new EventEmitter<any>();

  @ViewChild('CustomerName') vCustomerName: ElementRef;
  @ViewChild('CustomerEmail') vCustomerEmail: ElementRef;
  @ViewChild('CustomerPassword') vCustomerPassword: ElementRef;

  evtPostData() {

    /* In event emitter i have taken any type so that i can pass any value like number , boolean , object , array 
       As of now i am taking the object */
    this.customerEmitter.emit({
      Name: this.vCustomerName.nativeElement.value,
      Email: this.vCustomerEmail.nativeElement.value,
      Password: this.vCustomerPassword.nativeElement.value,
    });
  }
}
