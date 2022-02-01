import * as React from 'react';
import type { CustomizeComponent } from '../interface';
export interface ExpandedRowProps {
    prefixCls: string;
    component: CustomizeComponent;
    cellComponent: CustomizeComponent;
    className: string;
    expanded: boolean;
    children: React.ReactNode;
    colSpan: number;
    isEmpty: boolean;
}
declare function ExpandedRow({ prefixCls, children, component: Component, cellComponent, className, expanded, colSpan, isEmpty, }: ExpandedRowProps): JSX.Element;
export default ExpandedRow;
