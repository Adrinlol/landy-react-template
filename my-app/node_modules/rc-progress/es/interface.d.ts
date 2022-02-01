/// <reference types="react" />
export interface ProgressProps {
    id?: string;
    strokeWidth?: number;
    trailWidth?: number;
    className?: string;
    percent?: number | number[];
    strokeColor?: StrokeColorType;
    trailColor?: string;
    strokeLinecap?: StrokeLinecapType;
    prefixCls?: string;
    style?: React.CSSProperties;
    gapDegree?: number;
    gapPosition?: GapPositionType;
    transition?: string;
    onClick?: React.MouseEventHandler;
}
export declare type BaseStrokeColorType = string | Record<string, string>;
export declare type StrokeColorType = BaseStrokeColorType | BaseStrokeColorType[];
export declare type GapPositionType = 'top' | 'right' | 'bottom' | 'left';
export declare type StrokeLinecapType = 'round' | 'butt' | 'square';
