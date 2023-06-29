import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Text2Component } from './text2.component';

describe('Text2Component', () => {
  let component: Text2Component;
  let fixture: ComponentFixture<Text2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [Text2Component]
    });
    fixture = TestBed.createComponent(Text2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
