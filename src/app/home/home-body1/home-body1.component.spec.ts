import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBody1Component } from './home-body1.component';

describe('HomeBody1Component', () => {
  let component: HomeBody1Component;
  let fixture: ComponentFixture<HomeBody1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeBody1Component]
    });
    fixture = TestBed.createComponent(HomeBody1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
