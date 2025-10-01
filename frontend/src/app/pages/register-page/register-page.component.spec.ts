import { TestBed } from '@angular/core/testing';
import { RegisterPageComponent } from './register-page.component';

describe('RegisterPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterPageComponent],
    }).compileComponents();
  });

  it('should create the register page', () => {
    const fixture = TestBed.createComponent(RegisterPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
