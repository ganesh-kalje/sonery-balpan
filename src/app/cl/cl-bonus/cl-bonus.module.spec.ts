import { ClBonusModule } from './cl-bonus.module';

describe('ClBonusModule', () => {
  let clBonusModule: ClBonusModule;

  beforeEach(() => {
    clBonusModule = new ClBonusModule();
  });

  it('should create an instance', () => {
    expect(clBonusModule).toBeTruthy();
  });
});
