import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksListViewEntryComponent } from './books-list-view-entry.component';

describe('BooksListViewEntryComponent', () => {
  let component: BooksListViewEntryComponent;
  let fixture: ComponentFixture<BooksListViewEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksListViewEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksListViewEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
