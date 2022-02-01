import * as React from 'react';
interface TitleEventEntity {
    key: string;
    domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
export interface SubMenuProps {
    className?: string;
    disabled?: boolean;
    level?: number;
    title?: React.ReactNode;
    icon?: React.ReactNode;
    style?: React.CSSProperties;
    onTitleClick?: (e: TitleEventEntity) => void;
    onTitleMouseEnter?: (e: TitleEventEntity) => void;
    onTitleMouseLeave?: (e: TitleEventEntity) => void;
    popupOffset?: [number, number];
    popupClassName?: string;
    children?: React.ReactNode;
}
declare function SubMenu(props: SubMenuProps): JSX.Element;
export default SubMenu;
