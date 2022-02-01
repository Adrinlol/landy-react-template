import * as React from 'react';
import { ButtonProps } from '../button';
import { ButtonHTMLType } from '../button/button';
import { ButtonGroupProps } from '../button/button-group';
import { DropDownProps } from './dropdown';
export declare type DropdownButtonType = 'default' | 'primary' | 'ghost' | 'dashed' | 'link' | 'text';
export interface DropdownButtonProps extends ButtonGroupProps, DropDownProps {
    type?: DropdownButtonType;
    htmlType?: ButtonHTMLType;
    disabled?: boolean;
    loading?: ButtonProps['loading'];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    icon?: React.ReactNode;
    href?: string;
    children?: React.ReactNode;
    title?: string;
    buttonsRender?: (buttons: React.ReactNode[]) => React.ReactNode[];
}
interface DropdownButtonInterface extends React.FC<DropdownButtonProps> {
    __ANT_BUTTON: boolean;
}
declare const DropdownButton: DropdownButtonInterface;
export default DropdownButton;
