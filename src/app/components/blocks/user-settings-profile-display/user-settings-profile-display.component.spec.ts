import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsProfileDisplayComponent } from './user-settings-profile-display.component';

describe('UserSettingsProfileDisplayComponent', () => {
  let component: UserSettingsProfileDisplayComponent;
  let fixture: ComponentFixture<UserSettingsProfileDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingsProfileDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingsProfileDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
