import { type TestContext } from "@ember/test-helpers";
import type EmberApplication from "@ember/application";
import type { Owner } from "@ember/test-helpers/build-owner";
export declare const test: import("vitest").TestAPI<{
    app: typeof EmberApplication;
    element: HTMLElement;
    context: TestContext;
    env: {
        owner: Owner;
        element: HTMLElement;
        pauseTest: () => Promise<void>;
    };
}>;
export declare const renderingTest: import("vitest").TestAPI<{
    app: typeof EmberApplication;
    element: HTMLElement;
    context: TestContext;
    env: {
        owner: Owner;
        element: HTMLElement;
        pauseTest: () => Promise<void>;
    };
}>;
export declare const applicationTest: import("vitest").TestAPI<{
    app: typeof EmberApplication;
    element: HTMLElement;
    context: TestContext;
    env: {
        owner: Owner;
        element: HTMLElement;
        pauseTest: () => Promise<void>;
    };
}>;
//# sourceMappingURL=extended-test-context.d.ts.map