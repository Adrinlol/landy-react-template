/**
 * To match accessibility requirement, we always provide an input in the component.
 * Other element will not set `tabIndex` to avoid `onBlur` sequence problem.
 * For focused select, we set `aria-live="polite"` to update the accessibility content.
 *
 * ref:
 * - keyboard: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role#Keyboard_interactions
 *
 * New api:
 * - listHeight
 * - listItemHeight
 * - component
 *
 * Remove deprecated api:
 * - multiple
 * - tags
 * - combobox
 * - firstActiveValue
 * - dropdownMenuStyle
 * - openClassName (Not list in api)
 *
 * Update:
 * - `backfill` only support `combobox` mode
 * - `combobox` mode not support `labelInValue` since it's meaningless
 * - `getInputElement` only support `combobox` mode
 * - `onChange` return OptionData instead of ReactNode
 * - `filterOption` `onChange` `onSelect` accept OptionData instead of ReactNode
 * - `combobox` mode trigger `onChange` will get `undefined` if no `value` match in Option
 * - `combobox` mode not support `optionLabelProp`
 */
import * as React from 'react';
import type { DisplayValueType, RenderNode } from './BaseSelect';
import Option from './Option';
import OptGroup from './OptGroup';
import type { BaseSelectRef, BaseSelectPropsWithoutPrivate } from './BaseSelect';
export declare type OnActiveValue = (active: RawValueType, index: number, info?: {
    source?: 'keyboard' | 'mouse';
}) => void;
export declare type OnInternalSelect = (value: RawValueType, info: {
    selected: boolean;
}) => void;
export declare type RawValueType = string | number;
export interface LabelInValueType {
    label: React.ReactNode;
    value: RawValueType;
    /** @deprecated `key` is useless since it should always same as `value` */
    key?: React.Key;
}
export declare type DraftValueType = RawValueType | LabelInValueType | DisplayValueType | (RawValueType | LabelInValueType | DisplayValueType)[];
export declare type FilterFunc<OptionType> = (inputValue: string, option?: OptionType) => boolean;
export interface FieldNames {
    value?: string;
    label?: string;
    options?: string;
}
export interface BaseOptionType {
    disabled?: boolean;
    [name: string]: any;
}
export interface DefaultOptionType extends BaseOptionType {
    label: React.ReactNode;
    value?: string | number | null;
    children?: Omit<DefaultOptionType, 'children'>[];
}
export declare type SelectHandler<ValueType = any, OptionType extends BaseOptionType = DefaultOptionType> = ((value: RawValueType | LabelInValueType, option: OptionType) => void) | ((value: ValueType, option: OptionType) => void);
export interface SelectProps<ValueType = any, OptionType extends BaseOptionType = DefaultOptionType> extends BaseSelectPropsWithoutPrivate {
    prefixCls?: string;
    id?: string;
    backfill?: boolean;
    fieldNames?: FieldNames;
    /** @deprecated Use `searchValue` instead */
    inputValue?: string;
    searchValue?: string;
    onSearch?: (value: string) => void;
    autoClearSearchValue?: boolean;
    onSelect?: SelectHandler<ValueType, OptionType>;
    onDeselect?: SelectHandler<ValueType, OptionType>;
    /**
     * In Select, `false` means do nothing.
     * In TreeSelect, `false` will highlight match item.
     * It's by design.
     */
    filterOption?: boolean | FilterFunc<OptionType>;
    filterSort?: (optionA: OptionType, optionB: OptionType) => number;
    optionFilterProp?: string;
    optionLabelProp?: string;
    children?: React.ReactNode;
    options?: OptionType[];
    defaultActiveFirstOption?: boolean;
    virtual?: boolean;
    listHeight?: number;
    listItemHeight?: number;
    menuItemSelectedIcon?: RenderNode;
    mode?: 'combobox' | 'multiple' | 'tags';
    labelInValue?: boolean;
    value?: ValueType | null;
    defaultValue?: ValueType | null;
    onChange?: (value: ValueType, option: OptionType | OptionType[]) => void;
}
declare const TypedSelect: (<ValueType = any, OptionType extends BaseOptionType | DefaultOptionType = DefaultOptionType>(props: SelectProps<ValueType, OptionType> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<BaseSelectRef>;
}) => React.ReactElement) & {
    Option: typeof Option;
    OptGroup: typeof OptGroup;
};
export default TypedSelect;
