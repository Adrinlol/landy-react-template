import Affix from '.';
export declare type BindElement = HTMLElement | Window | null | undefined;
export declare function getTargetRect(target: BindElement): DOMRect;
export declare function getFixedTop(placeholderReact: DOMRect, targetRect: DOMRect, offsetTop?: number): number | undefined;
export declare function getFixedBottom(placeholderReact: DOMRect, targetRect: DOMRect, offsetBottom?: number): number | undefined;
interface ObserverEntity {
    target: HTMLElement | Window;
    affixList: Affix[];
    eventHandlers: {
        [eventName: string]: any;
    };
}
export declare function getObserverEntities(): ObserverEntity[];
export declare function addObserveTarget(target: HTMLElement | Window | null, affix: Affix): void;
export declare function removeObserveTarget(affix: Affix): void;
export {};
