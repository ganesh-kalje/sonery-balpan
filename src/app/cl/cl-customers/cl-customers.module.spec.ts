import { ClCustomersModule } from './cl-customers.module';

describe('ClCustomersModule', () => {
  let clCustomersModule: ClCustomersModule;

  beforeEach(() => {
    clCustomersModule = new ClCustomersModule();
  });

  it('should create an instance', () => {
    expect(clCustomersModule).toBeTruthy();
  });
});
