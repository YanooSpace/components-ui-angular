import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonBoxComponent } from './common-box.component';

describe('CommonBoxComponent', () => {
  let component: CommonBoxComponent;
  let fixture: ComponentFixture<CommonBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommonBoxComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CommonBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
