import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionNewPageComponent } from './question-new-page.component';

describe('QuestionNewPageComponent', () => {
  let component: QuestionNewPageComponent;
  let fixture: ComponentFixture<QuestionNewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionNewPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionNewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
