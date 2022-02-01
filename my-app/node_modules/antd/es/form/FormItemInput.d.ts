import * as React from 'react';
import { ColProps } from '../grid/col';
import { ValidateStatus } from './FormItem';
interface FormItemInputMiscProps {
    prefixCls: string;
    children: React.ReactNode;
    errors: React.ReactNode[];
    warnings: React.ReactNode[];
    hasFeedback?: boolean;
    validateStatus?: ValidateStatus;
    /** @private Internal Usage, do not use in any of your production. */
    _internalItemRender?: {
        mark: string;
        render: (props: FormItemInputProps & FormItemInputMiscProps, domList: {
            input: JSX.Element;
            errorList: JSX.Element;
            extra: JSX.Element | null;
        }) => React.ReactNode;
    };
}
export interface FormItemInputProps {
    wrapperCol?: ColProps;
    extra?: React.ReactNode;
    status?: ValidateStatus;
    help?: React.ReactNode;
}
declare const FormItemInput: React.FC<FormItemInputProps & FormItemInputMiscProps>;
export default FormItemInput;
