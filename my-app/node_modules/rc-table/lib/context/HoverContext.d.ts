import * as React from 'react';
export interface HoverContextProps {
    startRow: number;
    endRow: number;
    onHover: (start: number, end: number) => void;
}
declare const HoverContext: React.Context<HoverContextProps>;
export default HoverContext;
