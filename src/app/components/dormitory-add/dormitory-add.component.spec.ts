import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DormitoryAddComponent } from './dormitory-add.component';

describe('DormitoryAddComponent', () => {
  let component: DormitoryAddComponent;
  let fixture: ComponentFixture<DormitoryAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DormitoryAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DormitoryAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
