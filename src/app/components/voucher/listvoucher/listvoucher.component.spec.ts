import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListvoucherComponent } from './listvoucher.component';

describe('ListvoucherComponent', () => {
  let component: ListvoucherComponent;
  let fixture: ComponentFixture<ListvoucherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListvoucherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListvoucherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
