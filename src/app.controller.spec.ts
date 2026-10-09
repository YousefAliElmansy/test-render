import { AppController } from './app.controller';

describe('AppController', () => {
  const controller = new AppController();

  it('root returns a message', () => {
    expect(controller.root().message).toBeDefined();
  });

  it('health returns ok', () => {
    expect(controller.health().status).toBe('ok');
  });
});
