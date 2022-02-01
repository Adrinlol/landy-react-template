import * as React from 'react';
import type { DefaultOptionType, SingleValueType, CascaderProps, InternalFieldNames } from '../Cascader';
declare const _default: (rawValues: SingleValueType[], options: DefaultOptionType[], fieldNames: InternalFieldNames, multiple: boolean, displayRender: CascaderProps['displayRender']) => {
    label: React.ReactNode;
    value: string;
    valueCells: SingleValueType;
}[];
export default _default;
