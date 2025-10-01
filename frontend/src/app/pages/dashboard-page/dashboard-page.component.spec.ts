import { TestBed } from '@angular/core/testing';
import { DashboardPageComponent } from './dashboard-page.component';

describe('DashboardPageComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardPageComponent],
    }).compileComponents();
  });

  it('should create the dashboard', () => {
    const fixture = TestBed.createComponent(DashboardPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
