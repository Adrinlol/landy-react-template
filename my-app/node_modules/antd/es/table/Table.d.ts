import * as React from 'react';
import RcTable, { Summary } from 'rc-table';
import { TableProps as RcTableProps } from 'rc-table/lib/Table';
import { SpinProps } from '../spin';
import { TooltipProps } from '../tooltip';
import { TableRowSelection, ColumnsType, TableCurrentDataSource, SorterResult, GetPopupContainer, TablePaginationConfig, SortOrder, TableLocale, FilterValue } from './interface';
import { SELECTION_COLUMN } from './hooks/useSelection';
import { SizeType } from '../config-provider/SizeContext';
import Column from './Column';
import ColumnGroup from './ColumnGroup';
export { ColumnsType, TablePaginationConfig };
export interface TableProps<RecordType> extends Omit<RcTableProps<RecordType>, 'transformColumns' | 'internalHooks' | 'internalRefs' | 'data' | 'columns' | 'scroll' | 'emptyText'> {
    dropdownPrefixCls?: string;
    dataSource?: RcTableProps<RecordType>['data'];
    columns?: ColumnsType<RecordType>;
    pagination?: false | TablePaginationConfig;
    loading?: boolean | SpinProps;
    size?: SizeType;
    bordered?: boolean;
    locale?: TableLocale;
    onChange?: (pagination: TablePaginationConfig, filters: Record<string, FilterValue | null>, sorter: SorterResult<RecordType> | SorterResult<RecordType>[], extra: TableCurrentDataSource<RecordType>) => void;
    rowSelection?: TableRowSelection<RecordType>;
    getPopupContainer?: GetPopupContainer;
    scroll?: RcTableProps<RecordType>['scroll'] & {
        scrollToFirstRowOnChange?: boolean;
    };
    sortDirections?: SortOrder[];
    showSorterTooltip?: boolean | TooltipProps;
}
declare const ForwardTable: <RecordType extends object = any>(props: TableProps<RecordType> & {
    children?: React.ReactNode;
} & {
    ref?: React.Ref<HTMLDivElement> | undefined;
}) => React.ReactElement;
declare type InternalTableType = typeof ForwardTable;
interface TableInterface extends InternalTableType {
    defaultProps?: Partial<TableProps<any>>;
    SELECTION_COLUMN: typeof SELECTION_COLUMN;
    EXPAND_COLUMN: typeof RcTable.EXPAND_COLUMN;
    SELECTION_ALL: 'SELECT_ALL';
    SELECTION_INVERT: 'SELECT_INVERT';
    SELECTION_NONE: 'SELECT_NONE';
    Column: typeof Column;
    ColumnGroup: typeof ColumnGroup;
    Summary: typeof Summary;
}
declare const Table: TableInterface;
export default Table;
