import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBoardItemComponent } from './inner-board-item.component';

describe('InnerBoardItemComponent', () => {
  let component: InnerBoardItemComponent;
  let fixture: ComponentFixture<InnerBoardItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerBoardItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerBoardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
