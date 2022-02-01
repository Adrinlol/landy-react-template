import * as React from 'react';
import type { MenuClickEventHandler, MenuHoverEventHandler, MenuTitleInfo, RenderIconType } from '../interface';
export interface SubMenuProps {
    style?: React.CSSProperties;
    className?: string;
    title?: React.ReactNode;
    children?: React.ReactNode;
    disabled?: boolean;
    /** @private Used for rest popup. Do not use in your prod */
    internalPopupClose?: boolean;
    /** @private Internal filled key. Do not set it directly */
    eventKey?: string;
    /** @private Do not use. Private warning empty usage */
    warnKey?: boolean;
    itemIcon?: RenderIconType;
    expandIcon?: RenderIconType;
    onMouseEnter?: MenuHoverEventHandler;
    onMouseLeave?: MenuHoverEventHandler;
    popupClassName?: string;
    popupOffset?: number[];
    onClick?: MenuClickEventHandler;
    onTitleClick?: (info: MenuTitleInfo) => void;
    onTitleMouseEnter?: MenuHoverEventHandler;
    onTitleMouseLeave?: MenuHoverEventHandler;
}
export default function SubMenu(props: SubMenuProps): JSX.Element;
