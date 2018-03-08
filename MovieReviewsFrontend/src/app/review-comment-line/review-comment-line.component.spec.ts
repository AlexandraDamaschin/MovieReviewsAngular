import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewCommentLineComponent } from './review-comment-line.component';

describe('ReviewCommentLineComponent', () => {
  let component: ReviewCommentLineComponent;
  let fixture: ComponentFixture<ReviewCommentLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewCommentLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewCommentLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
