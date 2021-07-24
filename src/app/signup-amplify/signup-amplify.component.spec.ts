import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupAmplifyComponent } from './signup-amplify.component';

describe('SignupAmplifyComponent', () => {
  let component: SignupAmplifyComponent;
  let fixture: ComponentFixture<SignupAmplifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignupAmplifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupAmplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
