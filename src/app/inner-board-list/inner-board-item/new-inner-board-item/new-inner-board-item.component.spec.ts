import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewInnerBoardItemComponent } from './new-inner-board-item.component';

describe('NewInnerBoardItemComponent', () => {
  let component: NewInnerBoardItemComponent;
  let fixture: ComponentFixture<NewInnerBoardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewInnerBoardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewInnerBoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
