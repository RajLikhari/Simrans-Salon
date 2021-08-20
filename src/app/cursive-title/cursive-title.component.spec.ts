import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursiveTitleComponent } from './cursive-title.component';

describe('CursiveTitleComponent', () => {
  let component: CursiveTitleComponent;
  let fixture: ComponentFixture<CursiveTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursiveTitleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursiveTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
