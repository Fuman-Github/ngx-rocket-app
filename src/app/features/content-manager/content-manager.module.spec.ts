import { ContentManagerModule } from './content-manager.module';

describe('ContentManagerModule', () => {
  let contentManagerModule: ContentManagerModule;

  beforeEach(() => {
    contentManagerModule = new ContentManagerModule();
  });

  it('should create an instance', () => {
    expect(contentManagerModule).toBeTruthy();
  });
});
