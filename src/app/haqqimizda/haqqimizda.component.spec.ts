import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HaqqimizdaComponent } from './haqqimizda.component';

describe('HaqqimizdaComponent', () => {
  let component: HaqqimizdaComponent;
  let fixture: ComponentFixture<HaqqimizdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HaqqimizdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HaqqimizdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
