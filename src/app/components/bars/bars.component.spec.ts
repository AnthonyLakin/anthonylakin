import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarsComponent } from './bars.component';

describe('BarsComponent', () => {
  let component: BarsComponent;
  let fixture: ComponentFixture<BarsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BarsComponent]
    });
    fixture = TestBed.createComponent(BarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
