import * as React from 'react';
import { ComponentType } from './Overflow';
export interface RawItemProps extends React.HTMLAttributes<any> {
    component?: ComponentType;
    children?: React.ReactNode;
}
declare const RawItem: React.ForwardRefExoticComponent<RawItemProps & React.RefAttributes<any>>;
export default RawItem;
