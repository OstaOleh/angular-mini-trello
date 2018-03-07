import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerBoardListNameComponent } from './inner-board-list-name.component';

describe('InnerBoardListNameComponent', () => {
  let component: InnerBoardListNameComponent;
  let fixture: ComponentFixture<InnerBoardListNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InnerBoardListNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerBoardListNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
