import { BonusModule } from './bonus.module';

describe('BonusModule', () => {
  let bonusModule: BonusModule;

  beforeEach(() => {
    bonusModule = new BonusModule();
  });

  it('should create an instance', () => {
    expect(bonusModule).toBeTruthy();
  });
});
