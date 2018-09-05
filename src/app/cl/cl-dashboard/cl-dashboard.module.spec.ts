import { ClDashboardModule } from './cl-dashboard.module';

describe('ClDashboardModule', () => {
  let clDashboardModule: ClDashboardModule;

  beforeEach(() => {
    clDashboardModule = new ClDashboardModule();
  });

  it('should create an instance', () => {
    expect(clDashboardModule).toBeTruthy();
  });
});
