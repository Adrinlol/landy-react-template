import * as React from 'react';
import { InputNumberProps as RcInputNumberProps } from 'rc-input-number';
import { SizeType } from '../config-provider/SizeContext';
declare type ValueType = string | number;
export interface InputNumberProps<T extends ValueType = ValueType> extends Omit<RcInputNumberProps<T>, 'prefix' | 'size'> {
    prefixCls?: string;
    addonBefore?: React.ReactNode;
    addonAfter?: React.ReactNode;
    prefix?: React.ReactNode;
    size?: SizeType;
    bordered?: boolean;
}
declare const _default: (<T extends ValueType = ValueType>(props: InputNumberProps<T> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<HTMLInputElement> | undefined;
}) => React.ReactElement) & {
    displayName?: string | undefined;
};
export default _default;
