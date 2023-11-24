import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Titles1Component } from './titles1.component';

describe('Titles1Component', () => {
  let component: Titles1Component;
  let fixture: ComponentFixture<Titles1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Titles1Component]
    });
    fixture = TestBed.createComponent(Titles1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
