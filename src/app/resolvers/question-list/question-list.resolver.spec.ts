import { TestBed } from '@angular/core/testing';

import { QuestionListResolver } from './question-list.resolver';

describe('QuestionListResolver', () => {
  let resolver: QuestionListResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(QuestionListResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
