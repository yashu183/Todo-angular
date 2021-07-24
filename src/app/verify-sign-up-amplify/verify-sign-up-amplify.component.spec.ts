import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifySignUpAmplifyComponent } from './verify-sign-up-amplify.component';

describe('VerifySignUpAmplifyComponent', () => {
  let component: VerifySignUpAmplifyComponent;
  let fixture: ComponentFixture<VerifySignUpAmplifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifySignUpAmplifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifySignUpAmplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
