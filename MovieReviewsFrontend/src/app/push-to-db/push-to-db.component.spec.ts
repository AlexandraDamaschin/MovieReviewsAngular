import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PushToDbComponent } from './push-to-db.component';

describe('PushToDbComponent', () => {
  let component: PushToDbComponent;
  let fixture: ComponentFixture<PushToDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PushToDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PushToDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
