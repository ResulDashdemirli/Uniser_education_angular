import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnaSehifeComponent } from './ana-sehife.component';

describe('AnaSehifeComponent', () => {
  let component: AnaSehifeComponent;
  let fixture: ComponentFixture<AnaSehifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnaSehifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnaSehifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
