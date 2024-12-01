import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupTemplateFormComponent } from './signup-template-form.component';

describe('SignupTemplateFormComponent', () => {
  let component: SignupTemplateFormComponent;
  let fixture: ComponentFixture<SignupTemplateFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignupTemplateFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignupTemplateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
