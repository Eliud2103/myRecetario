import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarutvcoComponent } from './navbarutvco.component';

describe('NavbarutvcoComponent', () => {
  let component: NavbarutvcoComponent;
  let fixture: ComponentFixture<NavbarutvcoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarutvcoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarutvcoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
