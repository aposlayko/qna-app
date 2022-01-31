import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTextPageComponent } from './search-by-text-page.component';

describe('SearchByTextPageComponent', () => {
  let component: SearchByTextPageComponent;
  let fixture: ComponentFixture<SearchByTextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByTextPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
