import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FounderItemComponent } from './founder-item.component';

describe('FounderItemComponent', () => {
  let component: FounderItemComponent;
  let fixture: ComponentFixture<FounderItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FounderItemComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FounderItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
