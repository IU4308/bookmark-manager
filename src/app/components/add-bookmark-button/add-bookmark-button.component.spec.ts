import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBookmarkButtonComponent } from './add-bookmark-button.component';

describe('AddBookmarkButtonComponent', () => {
  let component: AddBookmarkButtonComponent;
  let fixture: ComponentFixture<AddBookmarkButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBookmarkButtonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBookmarkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
