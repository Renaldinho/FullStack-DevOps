import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSettingsOptionsComponent } from './user-settings-options.component';

describe('UserSettingsOptionsComponent', () => {
  let component: UserSettingsOptionsComponent;
  let fixture: ComponentFixture<UserSettingsOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserSettingsOptionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserSettingsOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
