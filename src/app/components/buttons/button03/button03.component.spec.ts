import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Button03Component } from './button03.component';

describe('Button03Component', () => {
  let component: Button03Component;
  let fixture: ComponentFixture<Button03Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Button03Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Button03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
