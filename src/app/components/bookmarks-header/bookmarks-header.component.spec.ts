import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksHeaderComponent } from './bookmarks-header.component';

describe('BookmarksHeaderComponent', () => {
  let component: BookmarksHeaderComponent;
  let fixture: ComponentFixture<BookmarksHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookmarksHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
