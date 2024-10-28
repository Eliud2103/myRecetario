import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarpersonalComponent } from './navbarpersonal.component';

describe('NavbarpersonalComponent', () => {
  let component: NavbarpersonalComponent;
  let fixture: ComponentFixture<NavbarpersonalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarpersonalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarpersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
