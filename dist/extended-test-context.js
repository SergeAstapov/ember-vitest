import { resumeTest, setApplication, setupContext, pauseTest, teardownContext, setupRenderingContext, setupApplicationContext } from '@ember/test-helpers';
import { test as test$1 } from 'vitest';
import Application from 'ember-strict-application-resolver';

globalThis.resumeTest = resumeTest;
class App extends Application {
  modules = {};
}
const waitForSettled = true;
const teardownContextOptions = {
  waitForSettled
};
const test = test$1.extend({
  app: ({}, use) => use(App),
  element: ({}, use) => use(document.createElement("div")),
  context: ({}, use) => use({}),
  env: [async ({
    app,
    element,
    context
  }, use) => {
    document.body.append(element);
    setApplication(app.create({
      autoboot: false,
      rootElement: element
    }));
    await setupContext(context);
    await use({
      owner: context.owner,
      element,
      pauseTest
    });
    await teardownContext(context, teardownContextOptions);
    element.remove();
  }, {
    auto: true
  }]
});
const renderingTest = test$1.extend({
  app: ({}, use) => use(App),
  element: ({}, use) => use(document.createElement("div")),
  context: ({}, use) => use({}),
  env: [async ({
    app,
    element,
    context
  }, use) => {
    document.body.append(element);
    setApplication(app.create({
      autoboot: false,
      rootElement: element
    }));
    await setupContext(context);
    await setupRenderingContext(context);
    await use({
      owner: context.owner,
      element,
      pauseTest
    });
    await teardownContext(context, teardownContextOptions);
    element.remove();
  }, {
    auto: true
  }]
});
const applicationTest = test$1.extend({
  app: ({}, use) => use(App),
  element: ({}, use) => use(document.createElement("div")),
  context: ({}, use) => use({}),
  env: [async ({
    app,
    element,
    context
  }, use) => {
    document.body.append(element);
    console.log(app);
    setApplication(app.create({
      autoboot: false,
      rootElement: element
    }));
    await setupContext(context);
    await setupApplicationContext(context);
    await use({
      owner: context.owner,
      element,
      pauseTest
    });
    await teardownContext(context, teardownContextOptions);
    element.remove();
  }, {
    auto: true
  }]
});

export { applicationTest, renderingTest, test };
//# sourceMappingURL=extended-test-context.js.map
