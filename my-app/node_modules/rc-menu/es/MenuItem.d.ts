import * as React from 'react';
import type { MenuClickEventHandler, MenuHoverEventHandler, RenderIconType } from './interface';
export interface MenuItemProps extends Omit<React.HTMLAttributes<HTMLLIElement>, 'onClick' | 'onMouseEnter' | 'onMouseLeave' | 'onSelect'> {
    children?: React.ReactNode;
    /** @private Internal filled key. Do not set it directly */
    eventKey?: string;
    /** @private Do not use. Private warning empty usage */
    warnKey?: boolean;
    disabled?: boolean;
    itemIcon?: RenderIconType;
    /** @deprecated No place to use this. Should remove */
    attribute?: Record<string, string>;
    onMouseEnter?: MenuHoverEventHandler;
    onMouseLeave?: MenuHoverEventHandler;
    onClick?: MenuClickEventHandler;
}
declare function MenuItem(props: MenuItemProps): React.ReactElement;
export default MenuItem;
