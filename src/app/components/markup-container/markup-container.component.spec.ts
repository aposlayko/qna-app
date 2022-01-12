import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkupContainerComponent } from './markup-container.component';

describe('MarkupContainerComponent', () => {
  let component: MarkupContainerComponent;
  let fixture: ComponentFixture<MarkupContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarkupContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkupContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
