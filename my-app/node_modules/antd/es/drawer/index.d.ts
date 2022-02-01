import * as React from 'react';
declare type EventType = React.KeyboardEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement | HTMLButtonElement>;
declare type getContainerFunc = () => HTMLElement;
declare type ILevelMove = number | [number, number];
declare const PlacementTypes: ["top", "right", "bottom", "left"];
declare type placementType = typeof PlacementTypes[number];
declare const SizeTypes: ["default", "large"];
declare type sizeType = typeof SizeTypes[number];
export interface PushState {
    distance: string | number;
}
export interface DrawerProps {
    autoFocus?: boolean;
    closable?: boolean;
    closeIcon?: React.ReactNode;
    destroyOnClose?: boolean;
    forceRender?: boolean;
    getContainer?: string | HTMLElement | getContainerFunc | false;
    maskClosable?: boolean;
    mask?: boolean;
    maskStyle?: React.CSSProperties;
    style?: React.CSSProperties;
    size?: sizeType;
    /** Wrapper dom node style of header and body */
    drawerStyle?: React.CSSProperties;
    headerStyle?: React.CSSProperties;
    bodyStyle?: React.CSSProperties;
    contentWrapperStyle?: React.CSSProperties;
    title?: React.ReactNode;
    visible?: boolean;
    width?: number | string;
    height?: number | string;
    zIndex?: number;
    prefixCls?: string;
    push?: boolean | PushState;
    placement?: placementType;
    onClose?: (e: EventType) => void;
    afterVisibleChange?: (visible: boolean) => void;
    className?: string;
    handler?: React.ReactNode;
    keyboard?: boolean;
    extra?: React.ReactNode;
    footer?: React.ReactNode;
    footerStyle?: React.CSSProperties;
    level?: string | string[] | null | undefined;
    levelMove?: ILevelMove | ((e: {
        target: HTMLElement;
        open: boolean;
    }) => ILevelMove);
}
export interface IDrawerState {
    push?: boolean;
}
declare const DrawerWrapper: React.FC<DrawerProps>;
export default DrawerWrapper;
