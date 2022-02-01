interface Options {
    attachTo?: Element;
    csp?: {
        nonce?: string;
    };
    prepend?: boolean;
}
export declare function injectCSS(css: string, option?: Options): HTMLStyleElement;
export declare function removeCSS(key: string, option?: Options): void;
export declare function updateCSS(css: string, key: string, option?: Options): HTMLStyleElement;
export {};
