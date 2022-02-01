import type { DirectionType } from '../config-provider';
import type { SizeType } from '../config-provider/SizeContext';
import type { ClearableInputProps } from './ClearableLabeledInput';
import type { InputProps } from './Input';
export declare function getInputClassName(prefixCls: string, bordered: boolean, size?: SizeType, disabled?: boolean, direction?: DirectionType): string;
export declare function hasPrefixSuffix(props: InputProps | ClearableInputProps): boolean;
