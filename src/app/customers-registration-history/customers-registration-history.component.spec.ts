import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersRegistrationHistoryComponent } from './customers-registration-history.component';

describe('CustomersRegistrationHistoryComponent', () => {
  let component: CustomersRegistrationHistoryComponent;
  let fixture: ComponentFixture<CustomersRegistrationHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomersRegistrationHistoryComponent]
    });
    fixture = TestBed.createComponent(CustomersRegistrationHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
