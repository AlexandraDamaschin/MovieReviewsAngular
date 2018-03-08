import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordValidation } from '../password-validation/password-validation.component';

describe('PasswordValidationComponent', () => {
  let component: PasswordValidation;
  let fixture: ComponentFixture<PasswordValidation>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PasswordValidation ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordValidation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
