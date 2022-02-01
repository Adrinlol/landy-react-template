import * as React from 'react';
import { TreeNode, SHOW_ALL, SHOW_PARENT, SHOW_CHILD, TreeSelectProps as RcTreeSelectProps } from 'rc-tree-select';
import type { BaseOptionType, DefaultOptionType } from 'rc-tree-select/lib/TreeSelect';
import type { BaseSelectRef } from 'rc-select';
import { TreeProps } from '../tree';
import { SizeType } from '../config-provider/SizeContext';
declare type RawValue = string | number;
export interface LabeledValue {
    key?: string;
    value: RawValue;
    label: React.ReactNode;
}
export declare type SelectValue = RawValue | RawValue[] | LabeledValue | LabeledValue[];
export interface TreeSelectProps<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType> extends Omit<RcTreeSelectProps<ValueType, OptionType>, 'showTreeIcon' | 'treeMotion' | 'inputIcon' | 'mode' | 'getInputElement' | 'backfill' | 'treeLine'> {
    suffixIcon?: React.ReactNode;
    size?: SizeType;
    bordered?: boolean;
    treeLine?: TreeProps['showLine'];
}
declare const TreeSelectRef: <ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType>(props: TreeSelectProps<ValueType, OptionType> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<BaseSelectRef> | undefined;
}) => React.ReactElement;
declare type InternalTreeSelectType = typeof TreeSelectRef;
interface TreeSelectInterface extends InternalTreeSelectType {
    TreeNode: typeof TreeNode;
    SHOW_ALL: typeof SHOW_ALL;
    SHOW_PARENT: typeof SHOW_PARENT;
    SHOW_CHILD: typeof SHOW_CHILD;
}
declare const TreeSelect: TreeSelectInterface;
export { TreeNode };
export default TreeSelect;
