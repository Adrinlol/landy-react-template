import * as React from 'react';
import type { ColumnsType, ColumnType, FixedType, Key, GetRowKey, TriggerEventHandler, RenderExpandIcon } from '../interface';
export declare function convertChildrenToColumns<RecordType>(children: React.ReactNode): ColumnsType<RecordType>;
/**
 * Parse `columns` & `children` into `columns`.
 */
declare function useColumns<RecordType>({ prefixCls, columns, children, expandable, expandedKeys, getRowKey, onTriggerExpand, expandIcon, rowExpandable, expandIconColumnIndex, direction, expandRowByClick, columnWidth, fixed, }: {
    prefixCls?: string;
    columns?: ColumnsType<RecordType>;
    children?: React.ReactNode;
    expandable: boolean;
    expandedKeys: Set<Key>;
    getRowKey: GetRowKey<RecordType>;
    onTriggerExpand: TriggerEventHandler<RecordType>;
    expandIcon?: RenderExpandIcon<RecordType>;
    rowExpandable?: (record: RecordType) => boolean;
    expandIconColumnIndex?: number;
    direction?: 'ltr' | 'rtl';
    expandRowByClick?: boolean;
    columnWidth?: number | string;
    fixed?: FixedType;
}, transformColumns: (columns: ColumnsType<RecordType>) => ColumnsType<RecordType>): [ColumnsType<RecordType>, readonly ColumnType<RecordType>[]];
export default useColumns;
