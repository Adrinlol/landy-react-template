import * as React from 'react';
import { ColumnType, Key, TableLocale, GetPopupContainer } from '../../interface';
import { FilterState } from '.';
export interface FilterDropdownProps<RecordType> {
    tablePrefixCls: string;
    prefixCls: string;
    dropdownPrefixCls: string;
    column: ColumnType<RecordType>;
    filterState?: FilterState<RecordType>;
    filterMultiple: boolean;
    filterMode?: 'menu' | 'tree';
    filterSearch?: boolean;
    columnKey: Key;
    children: React.ReactNode;
    triggerFilter: (filterState: FilterState<RecordType>) => void;
    locale: TableLocale;
    getPopupContainer?: GetPopupContainer;
}
declare function FilterDropdown<RecordType>(props: FilterDropdownProps<RecordType>): JSX.Element;
export default FilterDropdown;
