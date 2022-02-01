import * as React from 'react';
import RcSteps from 'rc-steps';
import type { ProgressDotRender } from 'rc-steps/lib/Steps';
export interface StepsProps {
    type?: 'default' | 'navigation';
    className?: string;
    current?: number;
    direction?: 'horizontal' | 'vertical';
    iconPrefix?: string;
    initial?: number;
    labelPlacement?: 'horizontal' | 'vertical';
    prefixCls?: string;
    progressDot?: boolean | ProgressDotRender;
    responsive?: boolean;
    size?: 'default' | 'small';
    status?: 'wait' | 'process' | 'finish' | 'error';
    style?: React.CSSProperties;
    percent?: number;
    onChange?: (current: number) => void;
}
export interface StepProps {
    className?: string;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLElement>;
    status?: 'wait' | 'process' | 'finish' | 'error';
    disabled?: boolean;
    title?: React.ReactNode;
    subTitle?: React.ReactNode;
    style?: React.CSSProperties;
}
interface StepsType extends React.FC<StepsProps> {
    Step: typeof RcSteps.Step;
}
declare const Steps: StepsType;
export default Steps;
