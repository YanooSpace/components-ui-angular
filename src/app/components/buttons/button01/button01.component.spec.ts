import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button01Component } from './button01.component';

describe('Button01Component', () => {
  let component: Button01Component;
  let fixture: ComponentFixture<Button01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Button01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
