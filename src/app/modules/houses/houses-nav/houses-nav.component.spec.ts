import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HousesNavComponent } from './houses-nav.component';

describe('HousesNavComponent', () => {
  let component: HousesNavComponent;
  let fixture: ComponentFixture<HousesNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HousesNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HousesNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
