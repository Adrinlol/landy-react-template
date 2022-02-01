import * as React from 'react';
import type { DataIndex, ColumnType, CustomizeComponent, DefaultRecordType, AlignType, CellEllipsisType } from '../interface';
import type { HoverContextProps } from '../context/HoverContext';
interface InternalCellProps<RecordType extends DefaultRecordType> extends Pick<HoverContextProps, 'onHover'> {
    prefixCls?: string;
    className?: string;
    record?: RecordType;
    /** `column` index is the real show rowIndex */
    index?: number;
    /** the index of the record. For the render(value, record, renderIndex) */
    renderIndex?: number;
    dataIndex?: DataIndex;
    render?: ColumnType<RecordType>['render'];
    component?: CustomizeComponent;
    children?: React.ReactNode;
    colSpan?: number;
    rowSpan?: number;
    ellipsis?: CellEllipsisType;
    align?: AlignType;
    shouldCellUpdate?: (record: RecordType, prevRecord: RecordType) => boolean;
    fixLeft?: number | false;
    fixRight?: number | false;
    firstFixLeft?: boolean;
    lastFixLeft?: boolean;
    firstFixRight?: boolean;
    lastFixRight?: boolean;
    /** @private Used for `expandable` with nest tree */
    appendNode?: React.ReactNode;
    additionalProps?: React.TdHTMLAttributes<HTMLTableCellElement>;
    /** @private Fixed for user use `shouldCellUpdate` which block the render */
    expanded?: boolean;
    rowType?: 'header' | 'body' | 'footer';
    isSticky?: boolean;
    hovering?: boolean;
}
export declare type CellProps<RecordType extends DefaultRecordType> = Omit<InternalCellProps<RecordType>, keyof HoverContextProps>;
/** Inject hover data here, we still wish MemoCell keep simple `shouldCellUpdate` logic */
declare const WrappedCell: React.ForwardRefExoticComponent<CellProps<any> & React.RefAttributes<any>>;
export default WrappedCell;
