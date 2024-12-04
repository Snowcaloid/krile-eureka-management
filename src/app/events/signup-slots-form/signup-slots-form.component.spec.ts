import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupSlotsFormComponent } from './signup-slots-form.component';

describe('SignupSlotsFormComponent', () => {
  let component: SignupSlotsFormComponent;
  let fixture: ComponentFixture<SignupSlotsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupSlotsFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupSlotsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
