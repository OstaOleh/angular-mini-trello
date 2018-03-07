import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBoardItemComponent } from './new-board-item.component';

describe('NewBoardItemComponent', () => {
  let component: NewBoardItemComponent;
  let fixture: ComponentFixture<NewBoardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBoardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
