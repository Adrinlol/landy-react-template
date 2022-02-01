import type * as React from 'react';
export declare type MenuMode = 'horizontal' | 'vertical' | 'inline';
export declare type BuiltinPlacements = Record<string, any>;
export declare type TriggerSubMenuAction = 'click' | 'hover';
export interface RenderIconInfo {
    isSelected?: boolean;
    isOpen?: boolean;
    isSubMenu?: boolean;
    disabled?: boolean;
}
export declare type RenderIconType = React.ReactNode | ((props: RenderIconInfo) => React.ReactNode);
export interface MenuInfo {
    key: string;
    keyPath: string[];
    /** @deprecated This will not support in future. You should avoid to use this */
    item: React.ReactInstance;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
export interface MenuTitleInfo {
    key: string;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
export declare type MenuHoverEventHandler = (info: {
    key: string;
    domEvent: React.MouseEvent<HTMLElement>;
}) => void;
export interface SelectInfo extends MenuInfo {
    selectedKeys: string[];
}
export declare type SelectEventHandler = (info: SelectInfo) => void;
export declare type MenuClickEventHandler = (info: MenuInfo) => void;
