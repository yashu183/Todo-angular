import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginAmplifyComponent } from './login-amplify.component';

describe('LoginAmplifyComponent', () => {
  let component: LoginAmplifyComponent;
  let fixture: ComponentFixture<LoginAmplifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginAmplifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginAmplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
