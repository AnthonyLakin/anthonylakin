import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OoopsComponent } from './ooops.component';

describe('OoopsComponent', () => {
  let component: OoopsComponent;
  let fixture: ComponentFixture<OoopsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [OoopsComponent]
    });
    fixture = TestBed.createComponent(OoopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
