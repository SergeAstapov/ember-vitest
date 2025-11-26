import { getOwner } from '@ember/owner';
import { settled, setApplication, setupContext as setupContext$1, teardownContext, click } from '@ember/test-helpers';
import { renderComponent } from '@ember/renderer';
import { createApp, create } from './create-app.js';

function setupContext() {
  let element = document.createElement("div");
  document.body.append(element);
  const app = createApp(element);
  return {
    element,
    get owner() {
      return getOwner(app);
    },
    async [Symbol.asyncDispose]() {
      app.destroy();
      await settled();
      element.remove();
    }
  };
}
async function setupRenderingContext(app) {
  let element = document.createElement("div");
  document.body.append(element);
  let renders = [];
  let ctx = {};
  let created = create(app, element);
  setApplication(created);
  await setupContext$1(ctx);

  // Overloads that match Element.querySelector:

  function find(selector) {
    return element.querySelector(selector);
  }

  // Overloads that match Element.querySelectorAll:

  function findAll(selector) {
    return element.querySelectorAll(selector);
  }
  return {
    element,
    get owner() {
      return ctx.owner;
    },
    find,
    findAll,
    click(target) {
      return click(target);
    },
    async render(component) {
      let result = renderComponent(component, {
        into: element,
        owner: ctx.owner
      });
      renders.push(result);
      await settled();
    },
    async [Symbol.dispose]() {
      renders.forEach(r => r.destroy());
      await teardownContext(ctx);
      element.remove();
    },
    async [Symbol.asyncDispose]() {
      renders.forEach(r => r.destroy());
      await settled();
      await teardownContext(ctx);
      await settled();
      element.remove();
    }
  };
}

export { setupContext, setupRenderingContext };
//# sourceMappingURL=manual.js.map
