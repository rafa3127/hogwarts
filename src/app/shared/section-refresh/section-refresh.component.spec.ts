import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionRefreshComponent } from './section-refresh.component';

describe('SectionRefreshComponent', () => {
  let component: SectionRefreshComponent;
  let fixture: ComponentFixture<SectionRefreshComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionRefreshComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionRefreshComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
