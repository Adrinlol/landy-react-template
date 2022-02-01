import * as React from 'react';
import { ValidateMessages } from 'rc-field-form/lib/interface';
import { ModalLocale } from '../modal/locale';
import { TransferLocale as TransferLocaleForEmpty } from '../empty';
import { PaginationLocale } from '../pagination/Pagination';
import { TableLocale } from '../table/interface';
import { PopconfirmLocale } from '../popconfirm';
import { UploadLocale } from '../upload/interface';
import { TransferLocale } from '../transfer';
import { PickerLocale as DatePickerLocale } from '../date-picker/generatePicker';
export declare const ANT_MARK = "internalMark";
export interface Locale {
    locale: string;
    Pagination?: PaginationLocale;
    DatePicker?: DatePickerLocale;
    TimePicker?: Record<string, any>;
    Calendar?: Record<string, any>;
    Table?: TableLocale;
    Modal?: ModalLocale;
    Popconfirm?: PopconfirmLocale;
    Transfer?: Partial<TransferLocale>;
    Select?: Record<string, any>;
    Upload?: UploadLocale;
    Empty?: TransferLocaleForEmpty;
    global?: Record<string, any>;
    PageHeader?: {
        back: string;
    };
    Icon?: Record<string, any>;
    Text?: {
        edit?: any;
        copy?: any;
        copied?: any;
        expand?: any;
    };
    Form?: {
        optional?: string;
        defaultValidateMessages: ValidateMessages;
    };
    Image?: {
        preview: string;
    };
}
export interface LocaleProviderProps {
    locale: Locale;
    children?: React.ReactNode;
    _ANT_MARK__?: string;
}
export default class LocaleProvider extends React.Component<LocaleProviderProps, any> {
    static defaultProps: {
        locale: {};
    };
    constructor(props: LocaleProviderProps);
    componentDidMount(): void;
    componentDidUpdate(prevProps: LocaleProviderProps): void;
    componentWillUnmount(): void;
    getMemoizedContextValue: import("memoize-one").MemoizedFn<(localeValue: Locale) => Locale & {
        exist?: boolean;
    }>;
    render(): JSX.Element;
}
