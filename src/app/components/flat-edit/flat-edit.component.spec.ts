import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatEditComponent } from './flat-edit.component';

describe('FlatEditComponent', () => {
  let component: FlatEditComponent;
  let fixture: ComponentFixture<FlatEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
