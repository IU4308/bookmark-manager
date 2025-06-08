import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModeDropdownComponent } from './view-mode-dropdown.component';

describe('ViewModeDropdownComponent', () => {
  let component: ViewModeDropdownComponent;
  let fixture: ComponentFixture<ViewModeDropdownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewModeDropdownComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewModeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
