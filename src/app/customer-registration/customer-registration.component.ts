import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css'],
})
export class CustomerRegistrationComponent
  implements
    OnChanges,
    AfterViewInit,
    AfterContentInit,
    AfterViewChecked,
    AfterContentChecked,
    OnDestroy
{
  @Input('CustomerInfo') localCustomerInfo: any;

  /*Page Life Cycle Hook*/
  //constructor(private changeDector: ChangeDetectorRef) {}
  constructor() {}

  //ngOnChanges(changes: SimpleChanges) {
  ngOnChanges() {
    console.log('Input changes are ', this.localCustomerInfo);

    /*For Single Key*/
    //const updatedObject = { ...changes["CustomerInfo"]?.currentValue }; // Create a new object
    //updatedObject.Name = "Peter";
    //this.localCustomerInfo = updatedObject;
    //this.changeDector.detectChanges();

    this.localCustomerInfo = {
      Name: 'Peter',
    };
    console.log('ngOnchanges changes are loaded');
  }

  ngOnInit() {
    console.log('Page Component has loaded');
    //For Subscription activies we do here..... API , Routing , Services related Subscriptions handle
  }

  evtClearData() {
    this.localCustomerInfo = { Name: '', Email: '', Password: '' };
  }

  @Output('CustomerEventEmitter') customerEmitter = new EventEmitter<any>();

  @ViewChild('CustomerName') vCustomerName: ElementRef;
  @ViewChild('CustomerEmail') vCustomerEmail: ElementRef;
  @ViewChild('CustomerPassword') vCustomerPassword: ElementRef;

  ngAfterViewInit(): void {
    this.vCustomerEmail.nativeElement.value = 'Peter@gmail.com';
    this.vCustomerPassword.nativeElement.value = 'QWER#$@!';
    console.log('View child has updated');
  }

  evtPostData() {
    this.customerEmitter.emit({
      Name: this.vCustomerName.nativeElement.value,
      Email: this.vCustomerEmail.nativeElement.value,
      Password: this.vCustomerPassword.nativeElement.value,
    });
  }

  /*-------------Page Life cycle hooks *--------------------*/
  @ContentChild('CustomerMessage') cCustomerMessage: ElementRef;

  ngAfterContentInit(): void {
    this.cCustomerMessage.nativeElement.value =
      'Peter is a SalesRep having 2 kids';
    console.log('Content child has updated');
  }

  ngAfterViewChecked() {
    console.log('View has changes');
  }
  ngAfterContentChecked() {
    console.log('Content changes');
  }
  ngOnDestroy() {
    console.log('Page is Destroying. You are moving into the another page.');
  }
}
