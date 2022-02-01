import * as React from 'react';
export interface TransferSearchProps {
    prefixCls?: string;
    placeholder?: string;
    onChange?: (e: React.FormEvent<HTMLElement>) => void;
    handleClear?: () => void;
    value?: string;
    disabled?: boolean;
}
export default function Search(props: TransferSearchProps): JSX.Element;
