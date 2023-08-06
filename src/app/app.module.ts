import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CustomerRegistrationComponent } from './customer-registration/customer-registration.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersRegistrationHistoryComponent } from './customers-registration-history/customers-registration-history.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerRegistrationComponent,
    CustomerDetailsComponent,
    CustomersRegistrationHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
