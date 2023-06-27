import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenHeaderComponent } from './full-screen-header.component';

describe('FullScreenHeaderComponent', () => {
  let component: FullScreenHeaderComponent;
  let fixture: ComponentFixture<FullScreenHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FullScreenHeaderComponent]
    });
    fixture = TestBed.createComponent(FullScreenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
