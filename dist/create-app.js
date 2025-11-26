import Application from 'ember-strict-application-resolver';

class App extends Application {
  modules = {};
}
function createApp(element) {
  return App.create({
    autoboot: false,
    rootElement: element
  });
}
function create(app, element) {
  if (app) {
    return app.create({
      autoboot: false,
      rootElement: element
    });
  }
  return createApp(element);
}

export { create, createApp };
//# sourceMappingURL=create-app.js.map
