import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTagsPageComponent } from './search-by-tags-page.component';

describe('SearchByTagsPageComponent', () => {
  let component: SearchByTagsPageComponent;
  let fixture: ComponentFixture<SearchByTagsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByTagsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTagsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
