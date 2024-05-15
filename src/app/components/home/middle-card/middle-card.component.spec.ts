import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiddleCardComponent } from './middle-card.component';

describe('MiddleCardComponent', () => {
  let component: MiddleCardComponent;
  let fixture: ComponentFixture<MiddleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MiddleCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MiddleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
