import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByNamesComponent } from './order-by-names.component';

describe('OrderByNamesComponent', () => {
  let component: OrderByNamesComponent;
  let fixture: ComponentFixture<OrderByNamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByNamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByNamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
