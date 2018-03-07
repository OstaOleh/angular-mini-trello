import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBoardListComponent } from './inner-board-list.component';

describe('InnerBoardListComponent', () => {
  let component: InnerBoardListComponent;
  let fixture: ComponentFixture<InnerBoardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerBoardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerBoardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
