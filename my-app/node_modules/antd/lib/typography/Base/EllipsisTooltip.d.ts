import * as React from 'react';
export interface EllipsisTooltipProps {
    title?: React.ReactNode;
    enabledEllipsis: boolean;
    isEllipsis?: boolean;
    children: React.ReactElement;
}
declare const EllipsisTooltip: {
    ({ title, enabledEllipsis, isEllipsis, children, }: EllipsisTooltipProps): JSX.Element;
    displayName: string;
};
export default EllipsisTooltip;
