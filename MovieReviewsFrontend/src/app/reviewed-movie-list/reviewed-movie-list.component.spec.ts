import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewedMovieListComponent } from './reviewed-movie-list.component';

describe('ReviewedMovieListComponent', () => {
  let component: ReviewedMovieListComponent;
  let fixture: ComponentFixture<ReviewedMovieListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewedMovieListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewedMovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
