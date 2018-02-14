import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovieReviewComponent } from './new-movie-review.component';

describe('NewMovieReviewComponent', () => {
  let component: NewMovieReviewComponent;
  let fixture: ComponentFixture<NewMovieReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewMovieReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewMovieReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
