import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgNavComponent } from './img-nav.component';

describe('ImgNavComponent', () => {
  let component: ImgNavComponent;
  let fixture: ComponentFixture<ImgNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
