import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeGraphicComponent } from './three-graphic.component';

describe('ThreeGraphicComponent', () => {
  let component: ThreeGraphicComponent;
  let fixture: ComponentFixture<ThreeGraphicComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ThreeGraphicComponent]
    });
    fixture = TestBed.createComponent(ThreeGraphicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
