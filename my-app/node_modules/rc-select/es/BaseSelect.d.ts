import * as React from 'react';
import type { ScrollTo } from 'rc-virtual-list/lib/List';
export declare type RenderNode = React.ReactNode | ((props: any) => React.ReactNode);
export declare type RenderDOMFunc = (props: any) => HTMLElement;
export declare type Mode = 'multiple' | 'tags' | 'combobox';
export declare type Placement = 'bottomLeft' | 'bottomRight' | 'topLeft' | 'topRight';
export declare type RawValueType = string | number;
export interface RefOptionListProps {
    onKeyDown: React.KeyboardEventHandler;
    onKeyUp: React.KeyboardEventHandler;
    scrollTo?: (index: number) => void;
}
export declare type CustomTagProps = {
    label: React.ReactNode;
    value: any;
    disabled: boolean;
    onClose: (event?: React.MouseEvent<HTMLElement, MouseEvent>) => void;
    closable: boolean;
};
export interface DisplayValueType {
    key?: React.Key;
    value?: RawValueType;
    label?: React.ReactNode;
    disabled?: boolean;
}
export interface BaseSelectRef {
    focus: () => void;
    blur: () => void;
    scrollTo: ScrollTo;
}
export interface BaseSelectPrivateProps {
    id: string;
    prefixCls: string;
    omitDomProps?: string[];
    displayValues: DisplayValueType[];
    onDisplayValuesChange: (values: DisplayValueType[], info: {
        type: 'add' | 'remove' | 'clear';
        values: DisplayValueType[];
    }) => void;
    /** Current dropdown list active item string value */
    activeValue?: string;
    /** Link search input with target element */
    activeDescendantId?: string;
    onActiveValueChange?: (value: string | null) => void;
    searchValue: string;
    /** Trigger onSearch, return false to prevent trigger open event */
    onSearch: (searchValue: string, info: {
        source: 'typing' | 'effect' | 'submit' | 'blur';
    }) => void;
    /** Trigger when search text match the `tokenSeparators`. Will provide split content */
    onSearchSplit?: (words: string[]) => void;
    maxLength?: number;
    OptionList: React.ForwardRefExoticComponent<React.PropsWithoutRef<any> & React.RefAttributes<RefOptionListProps>>;
    /** Tell if provided `options` is empty */
    emptyOptions: boolean;
}
export declare type BaseSelectPropsWithoutPrivate = Omit<BaseSelectProps, keyof BaseSelectPrivateProps>;
export interface BaseSelectProps extends BaseSelectPrivateProps, React.AriaAttributes {
    className?: string;
    style?: React.CSSProperties;
    showSearch?: boolean;
    tagRender?: (props: CustomTagProps) => React.ReactElement;
    direction?: 'ltr' | 'rtl';
    tabIndex?: number;
    autoFocus?: boolean;
    notFoundContent?: React.ReactNode;
    placeholder?: React.ReactNode;
    onClear?: () => void;
    choiceTransitionName?: string;
    mode?: Mode;
    disabled?: boolean;
    loading?: boolean;
    open?: boolean;
    defaultOpen?: boolean;
    onDropdownVisibleChange?: (open: boolean) => void;
    /** @private Internal usage. Do not use in your production. */
    getInputElement?: () => JSX.Element;
    /** @private Internal usage. Do not use in your production. */
    getRawInputElement?: () => JSX.Element;
    maxTagTextLength?: number;
    maxTagCount?: number | 'responsive';
    maxTagPlaceholder?: React.ReactNode | ((omittedValues: DisplayValueType[]) => React.ReactNode);
    tokenSeparators?: string[];
    allowClear?: boolean;
    showArrow?: boolean;
    inputIcon?: RenderNode;
    /** Clear all icon */
    clearIcon?: RenderNode;
    /** Selector remove icon */
    removeIcon?: RenderNode;
    animation?: string;
    transitionName?: string;
    dropdownStyle?: React.CSSProperties;
    dropdownClassName?: string;
    dropdownMatchSelectWidth?: boolean | number;
    dropdownRender?: (menu: React.ReactElement) => React.ReactElement;
    dropdownAlign?: any;
    placement?: Placement;
    getPopupContainer?: RenderDOMFunc;
    showAction?: ('focus' | 'click')[];
    onBlur?: React.FocusEventHandler<HTMLElement>;
    onFocus?: React.FocusEventHandler<HTMLElement>;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement>;
    onPopupScroll?: React.UIEventHandler<HTMLDivElement>;
    onInputKeyDown?: React.KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement>;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
}
export declare function isMultiple(mode: Mode): boolean;
declare const BaseSelect: React.ForwardRefExoticComponent<BaseSelectProps & React.RefAttributes<BaseSelectRef>>;
export default BaseSelect;
