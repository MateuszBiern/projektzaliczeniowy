import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RejestracjaComponent } from './rejestracja.component';

describe('RejestracjaComponent', () => {
  let component: RejestracjaComponent;
  let fixture: ComponentFixture<RejestracjaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RejestracjaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RejestracjaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
