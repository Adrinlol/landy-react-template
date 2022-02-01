import * as React from 'react';
import type { CascaderProps as RcCascaderProps, FieldNames, BaseOptionType, DefaultOptionType } from 'rc-cascader';
import type { SizeType } from '../config-provider/SizeContext';
export { BaseOptionType, DefaultOptionType };
export declare type FieldNamesType = FieldNames;
export declare type FilledFieldNamesType = Required<FieldNamesType>;
export interface CascaderProps<DataNodeType> extends Omit<RcCascaderProps, 'checkable' | 'options'> {
    multiple?: boolean;
    size?: SizeType;
    bordered?: boolean;
    suffixIcon?: React.ReactNode;
    options?: DataNodeType[];
}
export interface CascaderRef {
    focus: () => void;
    blur: () => void;
}
declare const Cascader: (<OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType>(props: CascaderProps<OptionType> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<CascaderRef> | undefined;
}) => React.ReactElement) & {
    displayName: string;
};
export default Cascader;
