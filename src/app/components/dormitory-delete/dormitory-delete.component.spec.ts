import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryDeleteComponent } from './dormitory-delete.component';

describe('DormitoryDeleteComponent', () => {
  let component: DormitoryDeleteComponent;
  let fixture: ComponentFixture<DormitoryDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormitoryDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitoryDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
