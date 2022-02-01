import * as React from 'react';
import type { HeaderProps } from '../Header/Header';
export interface FixedHeaderProps<RecordType> extends HeaderProps<RecordType> {
    className: string;
    noData: boolean;
    maxContentScroll: boolean;
    colWidths: readonly number[];
    columCount: number;
    direction: 'ltr' | 'rtl';
    fixHeader: boolean;
    stickyTopOffset?: number;
    stickyBottomOffset?: number;
    stickyClassName?: string;
    onScroll: (info: {
        currentTarget: HTMLDivElement;
        scrollLeft?: number;
    }) => void;
    children: (info: HeaderProps<RecordType>) => React.ReactNode;
}
declare const FixedHolder: React.ForwardRefExoticComponent<FixedHeaderProps<unknown> & React.RefAttributes<HTMLDivElement>>;
export default FixedHolder;
