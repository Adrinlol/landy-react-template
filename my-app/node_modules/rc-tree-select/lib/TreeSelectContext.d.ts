import * as React from 'react';
import type { DefaultOptionType, InternalFieldName, OnInternalSelect } from './TreeSelect';
export interface TreeSelectContextProps {
    virtual?: boolean;
    listHeight: number;
    listItemHeight: number;
    treeData: DefaultOptionType[];
    fieldNames: InternalFieldName;
    onSelect: OnInternalSelect;
}
declare const TreeSelectContext: React.Context<TreeSelectContextProps>;
export default TreeSelectContext;
