import * as React from 'react';
import { AutoSizeType } from 'rc-textarea/lib/ResizableTextArea';
import { TypographyProps } from '../Typography';
export declare type BaseType = 'secondary' | 'success' | 'warning' | 'danger';
interface CopyConfig {
    text?: string;
    onCopy?: () => void;
    icon?: React.ReactNode;
    tooltips?: boolean | React.ReactNode;
}
interface EditConfig {
    editing?: boolean;
    icon?: React.ReactNode;
    tooltip?: boolean | React.ReactNode;
    onStart?: () => void;
    onChange?: (value: string) => void;
    onCancel?: () => void;
    onEnd?: () => void;
    maxLength?: number;
    autoSize?: boolean | AutoSizeType;
    triggerType?: ('icon' | 'text')[];
    enterIcon?: React.ReactNode;
}
export interface EllipsisConfig {
    rows?: number;
    expandable?: boolean;
    suffix?: string;
    symbol?: React.ReactNode;
    onExpand?: React.MouseEventHandler<HTMLElement>;
    onEllipsis?: (ellipsis: boolean) => void;
    tooltip?: React.ReactNode;
}
export interface BlockProps extends TypographyProps {
    title?: string;
    editable?: boolean | EditConfig;
    copyable?: boolean | CopyConfig;
    type?: BaseType;
    disabled?: boolean;
    ellipsis?: boolean | EllipsisConfig;
    code?: boolean;
    mark?: boolean;
    underline?: boolean;
    delete?: boolean;
    strong?: boolean;
    keyboard?: boolean;
    italic?: boolean;
}
interface InternalBlockProps extends BlockProps {
    component: string;
}
declare const Base: React.ForwardRefExoticComponent<InternalBlockProps & React.RefAttributes<unknown>>;
export default Base;
