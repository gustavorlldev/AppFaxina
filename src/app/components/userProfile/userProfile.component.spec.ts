import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './userProfile.component';

import { Usuario } from '../login/usuario';

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('Usuario', () => {
  it('should create an instance', () => {
    expect(new Usuario).toBeTruthy();
  });
})

