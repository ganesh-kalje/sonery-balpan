import { CelebrityModule } from './celebrity.module';

describe('CelebrityModule', () => {
  let celebrityModule: CelebrityModule;

  beforeEach(() => {
    celebrityModule = new CelebrityModule();
  });

  it('should create an instance', () => {
    expect(celebrityModule).toBeTruthy();
  });
});
