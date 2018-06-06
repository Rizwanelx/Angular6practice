import { App.ServerModule } from './app.server.module';

describe('App.ServerModule', () => {
  let appServerModule: App.ServerModule;

  beforeEach(() => {
    appServerModule = new App.ServerModule();
  });

  it('should create an instance', () => {
    expect(appServerModule).toBeTruthy();
  });
});
