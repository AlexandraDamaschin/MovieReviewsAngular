import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieIconComponent } from './movie-icon.component';

describe('MovieIconComponent', () => {
  let component: MovieIconComponent;
  let fixture: ComponentFixture<MovieIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
