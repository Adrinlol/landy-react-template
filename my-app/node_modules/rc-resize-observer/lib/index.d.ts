import * as React from 'react';
export interface SizeInfo {
    width: number;
    height: number;
    offsetWidth: number;
    offsetHeight: number;
}
export declare type OnResize = (size: SizeInfo, element: HTMLElement) => void;
export interface ResizeObserverProps {
    /** Pass to ResizeObserver.Collection with additional data */
    data?: any;
    children: React.ReactNode | ((ref: React.RefObject<any>) => React.ReactElement);
    disabled?: boolean;
    /** Trigger if element resized. Will always trigger when first time render. */
    onResize?: OnResize;
}
declare function ResizeObserver(props: ResizeObserverProps): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
declare namespace ResizeObserver {
    var Collection: typeof import("./Collection").Collection;
}
export default ResizeObserver;
