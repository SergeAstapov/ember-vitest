import { click } from "@ember/test-helpers";
import type EmberApplication from "@ember/application";
import type Component from "@glimmer/component";
import type TOC from "@ember/component/template-only";
export declare function setupContext(): {
    element: HTMLDivElement;
    readonly owner: import("@ember/owner").default | undefined;
    [Symbol.asyncDispose](): Promise<void>;
};
export declare function setupRenderingContext(app: typeof EmberApplication): Promise<{
    element: HTMLDivElement;
    readonly owner: import("@ember/test-helpers/build-owner").Owner;
    find: {
        <K extends keyof (HTMLElementTagNameMap | SVGElementTagNameMap)>(selector: K): HTMLElementTagNameMap[K] | SVGElementTagNameMap[K] | null;
        <K extends keyof HTMLElementTagNameMap>(selector: K): HTMLElementTagNameMap[K] | null;
        <K extends keyof SVGElementTagNameMap>(selector: K): SVGElementTagNameMap[K] | null;
        <E extends Element = Element>(selector: string): E | null;
    };
    findAll: {
        <K extends keyof HTMLElementTagNameMap>(selector: K): NodeListOf<HTMLElementTagNameMap[K]>;
        <K extends keyof SVGElementTagNameMap>(selector: K): NodeListOf<SVGElementTagNameMap[K]>;
        <K extends keyof HTMLElementDeprecatedTagNameMap>(selector: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
        <E extends Element = Element>(selector: string): NodeListOf<E>;
    };
    click(target: Parameters<typeof click>[0]): Promise<void>;
    render(component: (new (...args: unknown[]) => Component) | typeof TOC): Promise<void>;
    [Symbol.dispose](): Promise<void>;
    [Symbol.asyncDispose](): Promise<void>;
}>;
//# sourceMappingURL=manual.d.ts.map