import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutAmplifyComponent } from './logout-amplify.component';

describe('LogoutAmplifyComponent', () => {
  let component: LogoutAmplifyComponent;
  let fixture: ComponentFixture<LogoutAmplifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoutAmplifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutAmplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
