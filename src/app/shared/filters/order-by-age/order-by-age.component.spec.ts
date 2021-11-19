import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByAgeComponent } from './order-by-age.component';

describe('OrderByAgeComponent', () => {
  let component: OrderByAgeComponent;
  let fixture: ComponentFixture<OrderByAgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByAgeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByAgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
