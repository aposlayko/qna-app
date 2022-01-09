import { TestBed } from '@angular/core/testing';

import { QuestionPageResolver } from './question-page.resolver';

describe('QuestionPageResolver', () => {
  let resolver: QuestionPageResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QuestionPageResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
