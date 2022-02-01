import * as React from 'react';
import type { Placement } from 'rc-select/lib/BaseSelect';
import type { BaseSelectRef, BaseSelectPropsWithoutPrivate } from 'rc-select';
export interface ShowSearchType<OptionType extends BaseOptionType = DefaultOptionType> {
    filter?: (inputValue: string, options: OptionType[], fieldNames: FieldNames) => boolean;
    render?: (inputValue: string, path: OptionType[], prefixCls: string, fieldNames: FieldNames) => React.ReactNode;
    sort?: (a: OptionType[], b: OptionType[], inputValue: string, fieldNames: FieldNames) => number;
    matchInputWidth?: boolean;
    limit?: number | false;
}
export interface FieldNames {
    label?: string;
    value?: string;
    children?: string;
}
export interface InternalFieldNames extends Required<FieldNames> {
    key: string;
}
export declare type SingleValueType = (string | number)[];
export declare type ValueType = SingleValueType | SingleValueType[];
export interface BaseOptionType {
    disabled?: boolean;
    [name: string]: any;
}
export interface DefaultOptionType extends BaseOptionType {
    label: React.ReactNode;
    value?: string | number | null;
    children?: DefaultOptionType[];
}
interface BaseCascaderProps<OptionType extends BaseOptionType = DefaultOptionType> extends Omit<BaseSelectPropsWithoutPrivate, 'tokenSeparators' | 'labelInValue' | 'mode' | 'showSearch'> {
    id?: string;
    prefixCls?: string;
    fieldNames?: FieldNames;
    children?: React.ReactElement;
    value?: ValueType;
    defaultValue?: ValueType;
    changeOnSelect?: boolean;
    displayRender?: (label: string[], selectedOptions?: OptionType[]) => React.ReactNode;
    checkable?: boolean | React.ReactNode;
    showSearch?: boolean | ShowSearchType<OptionType>;
    searchValue?: string;
    onSearch?: (value: string) => void;
    expandTrigger?: 'hover' | 'click';
    options?: OptionType[];
    /** @private Internal usage. Do not use in your production. */
    dropdownPrefixCls?: string;
    loadData?: (selectOptions: OptionType[]) => void;
    /** @deprecated Use `open` instead */
    popupVisible?: boolean;
    /** @deprecated Use `dropdownClassName` instead */
    popupClassName?: string;
    dropdownClassName?: string;
    dropdownMenuColumnStyle?: React.CSSProperties;
    /** @deprecated Use `placement` instead */
    popupPlacement?: Placement;
    placement?: Placement;
    /** @deprecated Use `onDropdownVisibleChange` instead */
    onPopupVisibleChange?: (open: boolean) => void;
    onDropdownVisibleChange?: (open: boolean) => void;
    expandIcon?: React.ReactNode;
    loadingIcon?: React.ReactNode;
}
declare type OnSingleChange<OptionType> = (value: SingleValueType, selectOptions: OptionType[]) => void;
declare type OnMultipleChange<OptionType> = (value: SingleValueType[], selectOptions: OptionType[][]) => void;
export interface SingleCascaderProps<OptionType extends BaseOptionType = DefaultOptionType> extends BaseCascaderProps<OptionType> {
    checkable?: false;
    onChange?: OnSingleChange<OptionType>;
}
export interface MultipleCascaderProps<OptionType extends BaseOptionType = DefaultOptionType> extends BaseCascaderProps<OptionType> {
    checkable: true | React.ReactNode;
    onChange?: OnMultipleChange<OptionType>;
}
export declare type CascaderProps<OptionType extends BaseOptionType = DefaultOptionType> = SingleCascaderProps<OptionType> | MultipleCascaderProps<OptionType>;
export declare type CascaderRef = Omit<BaseSelectRef, 'scrollTo'>;
declare const Cascader: (<OptionType extends DefaultOptionType | BaseOptionType = DefaultOptionType>(props: React.PropsWithChildren<CascaderProps<OptionType>> & {
    ref?: React.Ref<BaseSelectRef>;
}) => React.ReactElement) & {
    displayName?: string;
};
export default Cascader;
