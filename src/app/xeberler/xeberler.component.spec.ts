import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XeberlerComponent } from './xeberler.component';

describe('XeberlerComponent', () => {
  let component: XeberlerComponent;
  let fixture: ComponentFixture<XeberlerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XeberlerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XeberlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});