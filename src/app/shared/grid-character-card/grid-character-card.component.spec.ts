import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCharacterCardComponent } from './grid-character-card.component';

describe('GridCharacterCardComponent', () => {
  let component: GridCharacterCardComponent;
  let fixture: ComponentFixture<GridCharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCharacterCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCharacterCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
