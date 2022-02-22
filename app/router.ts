import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/api/v1/calendar', controller.home.calendar);
  router.resources('users', '/api/v1/users', controller.user);
};
