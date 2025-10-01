import { TestBed } from '@angular/core/testing';
import { LoginPageComponent } from './login-page.component';

describe('LoginPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginPageComponent],
    }).compileComponents();
  });

  it('should create the login page', () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
