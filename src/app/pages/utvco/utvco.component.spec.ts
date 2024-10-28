import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UtvcoComponent } from './utvco.component';

describe('UtvcoComponent', () => {
  let component: UtvcoComponent;
  let fixture: ComponentFixture<UtvcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UtvcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UtvcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
