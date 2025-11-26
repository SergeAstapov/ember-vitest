import Application from "ember-strict-application-resolver";
import type EmberApplication from "@ember/application";
declare class App extends Application {
    modules: {};
}
export declare function createApp(element: HTMLElement): App & {
    autoboot: boolean;
    rootElement: HTMLElement;
};
export declare function create(app: typeof EmberApplication | undefined, element: HTMLElement): (App & {
    autoboot: boolean;
    rootElement: HTMLElement;
}) | (EmberApplication & {
    autoboot: boolean;
    rootElement: HTMLElement;
});
export {};
//# sourceMappingURL=create-app.d.ts.map