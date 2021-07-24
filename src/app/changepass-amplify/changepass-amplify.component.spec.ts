import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangepassAmplifyComponent } from './changepass-amplify.component';

describe('ChangepassAmplifyComponent', () => {
  let component: ChangepassAmplifyComponent;
  let fixture: ComponentFixture<ChangepassAmplifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangepassAmplifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangepassAmplifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
