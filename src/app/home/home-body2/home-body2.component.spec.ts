import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeBody2Component } from './home-body2.component';

describe('HomeBody2Component', () => {
  let component: HomeBody2Component;
  let fixture: ComponentFixture<HomeBody2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HomeBody2Component]
    });
    fixture = TestBed.createComponent(HomeBody2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
