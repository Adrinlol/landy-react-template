import * as React from 'react';
export interface ExpandedRowProps {
    componentWidth: number;
    fixHeader: boolean;
    fixColumn: boolean;
    horizonScroll: boolean;
}
declare const ExpandedRowContext: React.Context<ExpandedRowProps>;
export default ExpandedRowContext;
